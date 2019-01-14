import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../layouts/Layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'
import { FormattedMessage } from 'react-intl'
import { ReadTime } from '../components/ReadTime'

class BlogPostTemplate extends React.Component {
  render() {
    const {
      pageContext: { previous, next, language },
      data: {
        site: {
          siteMetadata: { title: siteTitle, gitUrl, siteUrl },
        },
        markdownRemark: post,
      },
    } = this.props

    const filename =
      post.fileAbsolutePath && post.fileAbsolutePath.split('/').pop()

    const discussUrl = `https://twitter.com/search?q=${
      new URL(post.fields.tag, siteUrl).href
    }`

    const availableLanguages = post.fields.availableLanguages.map(
      ({ slug, language }, index) => (
        <span key={slug}>
          <Link to={slug}>{language}</Link>
          {post.fields.availableLanguages.length - 1 !== index && ', '}
        </span>
      )
    )

    const readIn = availableLanguages.length ? (
      <React.Fragment>
        • <FormattedMessage id="read.in" defaultMessage={'Read in'} />{' '}
        {availableLanguages}
      </React.Fragment>
    ) : null

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        language={language}
      >
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date} • <ReadTime minutes={post.timeToRead} />{' '}
          {readIn}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />

        <p
          style={{
            display: 'inline-block',
            marginBottom: rhythm(1),
          }}
        >
          <a href={discussUrl} target="_blank" rel="noopener noreferrer">
            <FormattedMessage
              id="discuss.twitter"
              defaultMessage="Discuss on Twitter"
            />
          </a>
          {` • `}

          <a
            href={`${gitUrl}tree/master/content/blog${
              post.fields.tag
            }/${filename}`}
            rel="noopener noreferrer"
          >
            <FormattedMessage id="edit.page" defaultMessage="Edit this page" />
          </a>
        </p>

        <Bio />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        gitUrl
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fileAbsolutePath
      html
      fields {
        tag
        availableLanguages {
          slug
          language
        }
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      timeToRead
    }
  }
`
