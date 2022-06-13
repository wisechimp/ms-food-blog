import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import Loadable from "react-loadable"

import Layout from "../components/Layout"
import BlogPostCard from "../components/blogpostcard/BlogPostCard"
import LoadingSpinner from "../components/tagsWordcloud/LoadingSpinner"

// Placeholder while the Wordcloud is loaded in the browser
const loading = () => <LoadingSpinner />
// Enabling the loading of the Wordcloud at run time
const TagsWordcloud = Loadable({
  loader: () => import("../components/tagsWordcloud/TagsWordcloud"),
  loading: loading,
})

const Posts = ({ data }) => {
  const [wordCloudWidth, setWordCloudWidth] = useState(700)

  const extractTags = () => {
    const extractedTags = []
    data.allMdx.edges.forEach(({ node }) => {
      node.frontmatter.tags.forEach(tag => {
        extractedTags.push(tag)
      })
    })
    return extractedTags
  }

  const countTagOccurence = extractTags().reduce((count, tag) => {
    count[tag] = (count[tag] || 0) + 1
    return count
  }, {})

  const generateWordCloudObject = () => {
    const wordCloudObject = Object.keys(countTagOccurence).map(tag => {
      return {
        text: tag,
        value: countTagOccurence[tag],
      }
    })
    return wordCloudObject
  }

  useEffect(() => {
    const windowWidth = window.innerWidth
    console.log(windowWidth)
    if (windowWidth < 700) {
      setWordCloudWidth(windowWidth)
    }
  }, [])

  return (
    <Layout title="Posts">
      <TagsWordcloud
        data={generateWordCloudObject()}
        height={300}
        width={wordCloudWidth}
      />
      {data.allMdx.edges.map(({ node }) => {
        const imageData = getImage(node.frontmatter.imageSrc)
        return (
          <BlogPostCard
            key={node.id}
            title={node.frontmatter.title}
            description={node.excerpt}
            author={node.frontmatter.author}
            date={node.frontmatter.date}
            slug={node.frontmatter.slug}
            imageSrc={imageData}
          />
        )
      })}
    </Layout>
  )
}

export default Posts

export const postsQuery = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            slug
            date(formatString: "Do MMMM YYYY")
            title
            author
            tags
            imageSrc {
              childImageSharp {
                gatsbyImageData(
                  transformOptions: { fit: CONTAIN }
                  width: 108
                  backgroundColor: "#00000000"
                )
              }
            }
          }
          excerpt
          id
        }
      }
    }
  }
`
