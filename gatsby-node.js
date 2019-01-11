const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const DEFAULT_LANGUAGE = 'en'

function createPost(graphql, createPage, language) {
  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  return graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { language: { eq: "${language}" } } }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              language
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      const {
        node: {
          fields: { slug },
          frontmatter: { language },
        },
      } = post

      createPage({
        path: slug,
        component: blogPost,
        context: {
          slug,
          previous,
          next,
          language,
        },
      })
    })
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  return new Promise(resolve => {
    if (!page.context.language) {
      deletePage(page)
      createPage({
        ...page,
        context: {
          ...page.context,
          language: DEFAULT_LANGUAGE,
        },
      })
    }
    resolve()
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  createPost(graphql, createPage, 'en')
    .then(() => createPost(graphql, createPage, 'sk'))
    .then(() => {
      const indexPost = path.resolve(`./src/pages/index.js`)
      createPage({
        path: 'sk',
        component: indexPost,
        context: {
          language: 'sk',
        },
      })
    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    node.frontmatter.language = node.frontmatter.language || DEFAULT_LANGUAGE

    const { language } = node.frontmatter

    const values = createFilePath({
      node,
      getNode,
      trailingSlash: false,
    }).split('/')

    values.pop()

    createNodeField({ name: `twitterSlug`, node, value: values.join('/') })

    if (language !== DEFAULT_LANGUAGE) {
      values.splice(1, 0, language)
    }

    createNodeField({
      name: `slug`,
      node,
      value: values.join('/'),
    })
  }
}
