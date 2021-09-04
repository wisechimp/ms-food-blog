const path = require("path")
const _ = require('lodash')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const queryData = await graphql(`
        {
            postsData: allMdx {
                edges {
					node {
						frontmatter {
							slug
						}
						id
					}
				}
            }
			tagsData: allMdx(limit: 2000) {
				group(field: frontmatter___tags) {
					fieldValue
				}
			}
        }
    `)

	if (queryData.errors) {
		throw queryData.errors
	}

	const blogposts = queryData.data.postsData.edges
	blogposts.forEach(({ node }, index) => {
		createPage({
			path: node.frontmatter.slug,
			component: path.resolve(`./src/templates/blogpost.js`),
			context: {
				id: node.id
			}
		})
	})

	const tagpages = queryData.data.tagsData.group
	tagpages.forEach(tag => {
		createPage({
			path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
			component: path.resolve(`./src/templates/tagpostslist.js`),
			context: {
				tag: tag.fieldValue
			},
		})
	})
}