const path = require("path")
const showdown = require("showdown")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  const fm = "---"
  const prune = 100
  if (node.internal.type === `Mdx`) {
    let content = node.internal.content
    let fmStart = content.indexOf(fm)
    let fmEnd = content.indexOf(fm, fmStart + 1) + fm.length
    let excerptEnd = Math.min(content.length, fmEnd + prune)
    let excerpt = content.substring(fmEnd, excerptEnd) + "..."
    excerpt = excerpt.trim()
    console.log(excerpt)

    let converter = new showdown.Converter()
    let excerptHtml = converter.makeHtml(excerpt)
    console.log(excerptHtml)

    createNodeField({
      node,
      name: `excerpt_html`,
      value: excerptHtml,
    })
  }
}

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
