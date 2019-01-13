import React from 'react'
import { Link, graphql } from 'gatsby'
import { FormattedMessage } from 'react-intl'

import Bio from '../components/Bio'
import Layout from '../layouts/Layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'
import { ReadTime } from '../components/ReadTime'

class BlogIndex extends React.Component {
  render() {
    const {
      data,
      pageContext: { language },
    } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        language={language}
      >
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug

          const availableLanguages = node.fields.availableLanguages.map(
            ({ slug, language }, index) => (
              <span key={slug}>
                <Link to={slug}>{language}</Link>
                {node.fields.availableLanguages.length - 1 !== index && ', '}
              </span>
            )
          )

          return (
            <div key={node.id}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>
                {node.frontmatter.date} • <ReadTime minutes={node.timeToRead} />{' '}
                • <FormattedMessage id="read.in" defaultMessage={'Read in'} />{' '}
                {availableLanguages}
              </small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query($language: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { language: { eq: $language } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
            availableLanguages {
              slug
              language
            }
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
          timeToRead
        }
      }
    }
  }
`
