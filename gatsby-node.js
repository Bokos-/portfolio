const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const DEFAULT_LANGUAGE = 'en'

function getPosts(graphql, language = undefined) {
  const filterCondition = language
    ? `filter: { frontmatter: { language: { eq: "${language}" } } }`
    : ''

  return graphql(`
    {
      allMarkdownRemark(
        ${filterCondition}
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
              tag
            }
            frontmatter {
              title
              language
            }
          }
        }
      }
    }
  `)
}

function createPost(graphql, actions, language) {
  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  return getPosts(graphql, language).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const { createPage } = actions

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

  createPost(graphql, actions, 'en')
    .then(() => createPost(graphql, actions, 'sk'))
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

function updateAvailableLanguages(nodes, createNodeField) {
  nodes.forEach(upperNode => {
    if (
      !upperNode.fields ||
      !upperNode.fields.tag ||
      !upperNode.fields.slug ||
      !upperNode.frontmatter.language
    ) {
      return
    }

    const availableLanguages = []
    const {
      fields: { tag },
      frontmatter: { language },
    } = upperNode

    nodes.forEach(node => {
      if (
        !node.fields ||
        !node.fields.tag ||
        !node.fields.slug ||
        !node.frontmatter.language
      ) {
        return
      }
      const {
        fields: { tag: nodeTag, slug: nodeSlug },
        frontmatter: { language: nodeLanguage },
      } = node

      if (nodeTag === tag && nodeLanguage !== language) {
        availableLanguages.push({ slug: nodeSlug, language: nodeLanguage })
      }
    })

    createNodeField({
      name: 'availableLanguages',
      value: availableLanguages,
      node: upperNode,
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode, getNodesByType }) => {
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

    createNodeField({ name: `tag`, node, value: values.join('/') })

    if (language !== DEFAULT_LANGUAGE) {
      values.splice(1, 0, language)
    }

    createNodeField({
      name: `slug`,
      node,
      value: values.join('/'),
    })

    updateAvailableLanguages(getNodesByType(`MarkdownRemark`), createNodeField)
  }
}
