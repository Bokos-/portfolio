import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import Layout from '../layouts/Layout'
import SEO from '../components/seo'

class NotFoundPage extends React.Component {
  render() {
    const {
      data,
      pageContext: { language },
    } = this.props

    return (
      <StaticQuery
        query={pageQuery}
        render={data => (
          <Layout
            location={this.props.location}
            title={data.site.siteMetadata.title}
            language={language}
          >
            <SEO title="404: Not Found" />
            <h1>Not Found</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          </Layout>
        )}
      />
    )
  }
}

export default NotFoundPage

const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
