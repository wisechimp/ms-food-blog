import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import BlogPostCard from "../components/blogpostcard/BlogPostCard"
import { getImage } from "gatsby-plugin-image"

const Posts = ({ data }) => {
  return (
    <Layout title="Posts">
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
            imageSrc {
              childImageSharp {
                gatsbyImageData(
                  width: 108
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
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
