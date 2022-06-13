const path = require("path")

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/^\/account/)) {
    page.matchPath = "/account/*"
  }

  createPage(page)
}

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
        id: node.id,
      },
    })
  })

  const tagpages = queryData.data.tagsData.group
  tagpages.forEach(tag => {
    createPage({
      path: `/tags/${tag.fieldValue.replace(/ /g, "-")}/`,
      component: path.resolve(`./src/templates/tagpostslist.js`),
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /auth0-js/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
