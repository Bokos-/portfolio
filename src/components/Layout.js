import React from 'react'
import { graphql, Link, StaticQuery } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h2
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h2>
      )
    }
    return (
      <StaticQuery
        query={layoutQuery}
        render={data => {
          const { social } = data.site.siteMetadata
          return (
            <div
              style={{
                marginLeft: `auto`,
                marginRight: `auto`,
                maxWidth: rhythm(24),
                padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
              }}
            >
              {header}
              {children}
              <footer>
                © {new Date().getFullYear()} |{' '}
                <a
                  href={`https://github.com/${social.github}/`}
                  target="_blank"
                >
                  github
                </a>{' '}
                |{' '}
                <a
                  href={`https://www.linkedin.com/in/${social.linkedIn}/`}
                  target="_blank"
                >
                  linked in
                </a>
                |{' '}
                <a
                  href={`https://www.facebook.com/${social.facebook}/`}
                  target="_blank"
                >
                  facebook
                </a>
                <a
                  href={`${rootPath}rss.xml`}
                  style={{ float: 'right' }}
                  target="_blank"
                >
                  rss
                </a>
              </footer>
            </div>
          )
        }}
      />
    )
  }
}

export default Layout

const layoutQuery = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        social {
          linkedIn
          github
          facebook
        }
      }
    }
  }
`
