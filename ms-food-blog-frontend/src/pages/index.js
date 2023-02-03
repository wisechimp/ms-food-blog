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
    data.allSanityPost.edges.forEach(({ node }) => {
      node.tags.forEach(tag => {
        extractedTags.push(tag.title)
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
      {data.allSanityPost.edges.map(({ node }) => {
        const {
          id,
          title,
          excerpt,
          publishedAt,
          slug,
          author,
          mainImageData,
        } = node
        const { altText, mainImage } = mainImageData
        const imageData = getImage(mainImage.asset)
        return (
          <BlogPostCard
            key={id}
            title={title}
            author={author.name}
            date={publishedAt}
            slug={slug.current}
            imageSrc={imageData}
            imageAltText={altText}
          >
            {excerpt}
          </BlogPostCard>
        )
      })}
    </Layout>
  )
}

export default Posts

export const postsQuery = graphql`
  query {
    allSanityPost(sort: { fields: publishedAt, order: DESC }) {
      edges {
        node {
          slug {
            current
          }
          publishedAt(formatString: "Do MMMM YYYY")
          title
          author {
            name
          }
          excerpt
          tags {
            title
          }
          mainImageData {
            altText
            mainImage {
              asset {
                gatsbyImageData(width: 108, backgroundColor: "#00000000")
              }
            }
          }
          id
        }
      }
    }
  }
`
