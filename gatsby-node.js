const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const contentQuery = await graphql(`
        query {
            allMdx {
                edges {
					node {
						frontmatter {
							slug
						}
						id
					}
				}
            }
        }
    `)
	
	if (contentQuery.errors) {
		throw contentQuery.errors
	}

	const blogposts = contentQuery.data.allMdx.edges
	blogposts.forEach(({ node }, index) => {
		createPage({
			path: node.frontmatter.slug,
			component: path.resolve(`./src/templates/blogpost.js`),
			context: {
				id: node.id
			}
		})
	})
}