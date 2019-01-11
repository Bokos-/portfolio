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
      pageContext: { previous, next, slug, language },
      data: {
        site: {
          siteMetadata: { title: siteTitle, gitUrl, siteUrl },
        },
        markdownRemark: post,
      },
    } = this.props

    const discussUrl = `https://twitter.com/search?q=${
      new URL(post.fields.twitterSlug, siteUrl).href
    }`

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
          {post.frontmatter.date} • <ReadTime minutes={post.timeToRead} />
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
            href={`${gitUrl}tree/master/content/blog${slug}index.md`}
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
      id
      excerpt(pruneLength: 160)
      html
      fields {
        twitterSlug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      timeToRead
    }
  }
`
