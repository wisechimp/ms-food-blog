import React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import BlogPostCard from "../components/blogpostcard/BlogPostCard"

const TagsPostTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allSanityPost
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  console.log(edges)
  return (
    <Layout title={tagHeader}>
      {edges.map(({ node }) => {
        const {
          id,
          title,
          excerpt,
          slug,
          author,
          mainImage,
          publishedAt,
        } = node
        const imageData = getImage(mainImage.asset)
        return (
          <BlogPostCard
            key={id}
            title={title}
            author={author.name}
            date={publishedAt}
            slug={slug.current}
            imageSrc={imageData}
          >
            {excerpt}
          </BlogPostCard>
        )
      })}
    </Layout>
  )
}

export default TagsPostTemplate

export const tagsQuery = graphql`
  query($tag: String) {
    allSanityPost(
      limit: 2000
      sort: { fields: [publishedAt], order: DESC }
      filter: { tags: { elemMatch: { title: { in: [$tag] } } } }
    ) {
      totalCount
      edges {
        node {
          title
          slug {
            current
          }
          author {
            name
          }
          publishedAt(formatString: "Do MMMM YYYY")
          mainImage {
            asset {
              gatsbyImageData(width: 108, backgroundColor: "#00000000")
            }
          }
          id
          excerpt
        }
      }
    }
  }
`
