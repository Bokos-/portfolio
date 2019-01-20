import React from 'react'
import { graphql, Link, StaticQuery } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import { IntlProvider, addLocaleData } from 'react-intl'

import en from 'react-intl/locale-data/en'
import sk from 'react-intl/locale-data/sk'

import messages_sk from '../translations/sk.json'
import messages_en from '../translations/en.json'

addLocaleData([...en, ...sk])

const messages = {
  sk: messages_sk,
  en: messages_en,
}

class Layout extends React.Component {
  render() {
    const { location, title, children, language } = this.props

    const path = language === 'en' ? '/' : `/${language}`
    const titlePath = [`${__PATH_PREFIX__}/`, `${__PATH_PREFIX__}/sk`]
    let header

    if (titlePath.includes(location.pathname)) {
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
            to={path}
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
            to={path}
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
            <IntlProvider locale={language} messages={messages[language]}>
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
                    rel="noopener noreferrer"
                  >
                    github
                  </a>{' '}
                  |{' '}
                  <a
                    href={`https://www.linkedin.com/in/${social.linkedIn}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linked in
                  </a>
                  <span id="footer-right-info">
                    {' '}
                    <Link to="/sk">sk</Link> | <Link to="/">en</Link> |{' '}
                    <a
                      href={`${__PATH_PREFIX__}/rss.xml`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      rss
                    </a>
                  </span>
                </footer>
              </div>
            </IntlProvider>
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
        }
      }
    }
  }
`
