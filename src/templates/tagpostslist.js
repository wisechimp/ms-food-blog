import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"

const TagsPostTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`
  return (
    <Layout title={tagHeader}>
      <ul>
        {edges.map(({ node }) => {
          const { title, slug } = node.frontmatter
          return (
            <li key={slug}>
              <Link to={slug}>{title}</Link>
            </li>
          )
        })}
      </ul>
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
          }
        }
      }
    }
  }
`
