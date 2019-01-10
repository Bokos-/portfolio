module.exports = {
  siteMetadata: {
    title: `Martin Bokša Blog`,
    author: `Martin Bokša`,
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `http://martinboksa.eu/`,
    gitUrl: `https://github.com/martinboksa/portfolio/`,
    social: {
      github: `martinboksa`,
      linkedIn: `martin-boksa`,
      facebook: `boksamartin`,
    },
  },
  pathPrefix: '/portfolio',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: '÷',
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-autolink-headers`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-29855276-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Martin Bokša Blog`,
        short_name: `BoksaBlog`,
        start_url: `/`,
        background_color: '#ffffff',
        theme_color: '#e62076',
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-remark-external-links',
      options: {
        target: '_self',
        rel: 'nofollow',
      },
    },
  ],
}
