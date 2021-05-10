import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import BlogPostCard from "../components/BlogPostCard"

const Posts = ({ data }) => {
  return (
    <Layout title="Posts">
      {data.allMdx.edges.map(({ node }) => {
        return (
          <BlogPostCard
            key={node.id}
            title={node.frontmatter.title}
            description={node.frontmatter.description}
            author={node.frontmatter.author}
            date={node.frontmatter.date}
            slug={node.frontmatter.slug}
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
            date
            title
            description
            author
          }
          id
        }
      }
    }
  }
`
