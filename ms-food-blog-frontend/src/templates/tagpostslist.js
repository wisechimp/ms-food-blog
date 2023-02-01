import React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import BlogPostCard from "../components/blogpostcard/BlogPostCard"

const TagsPostTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`
  return (
    <Layout title={tagHeader}>
      {edges.map(({ node }) => {
        const { id, excerpt, frontmatter } = node
        const {
          title,
          slug,
          author,
          date,
          imageSrc,
          excerpt_html,
        } = frontmatter
        const imageData = getImage(imageSrc)
        return (
          <BlogPostCard
            key={id}
            title={title}
            author={author}
            date={date}
            slug={slug}
            imageSrc={imageData}
          >
            {excerpt_html ? (
              <div dangerouslySetInnerHTML={{ __html: excerpt_html }} />
            ) : (
              excerpt
            )}
          </BlogPostCard>
        )
      })}
    </Layout>
  )
}

export default TagsPostTemplate

export const tagsQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
            author
            excerpt_html
            date(formatString: "Do MMMM YYYY")
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
          id
          excerpt
        }
      }
    }
  }
`
