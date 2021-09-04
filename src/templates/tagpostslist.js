import React from 'react'

import { Link, graphql } from 'gatsby'

const TagsPostTemplate = ({ pageContext, data }) => {
	const { tag } = pageContext
	const { edges, totalCount } = data.allMdx
	const tagHeader = `${totalCount} post${
		totalCount === 1 ? "" : "s"
	} tagged with "${tag}"`
  return (
    <div>
      <h1>{tagHeader}</h1>
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
    </div>
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
				node{
					frontmatter {
						title
						slug
					}
				}
			}
		}
	}`