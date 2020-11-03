const config = require('./config/website')
const targetAddress = new URL(
  process.env.TARGET_ADDRESS || `https://ledbetter.fm`
)

const activeEnv =
  process.env.ACTIVE_ENV || process.env.NODE_ENV || 'development'

console.log(`Using environment config: '${activeEnv}'`)

require('dotenv').config({
  path: `.env.${activeEnv}`,
})

const siteMetadata = {
  title: config.siteTitle,
  description: config.siteDescription,
  siteUrl: config.siteUrl,
  canonicalUrl: config.siteUrl,
  authorName: config.author,
  author: {
    name: config.author,
    minibio: config.minibio,
  },
  organization: {
    name: config.organization,
    url: config.siteUrl,
    logo: config.siteLogo,
  },
  siteLanguage: config.siteLanguage,
  siteLocale: config.siteLocale,
  image: config.siteLogo,
  twitterUsername: config.twitterHandle,
  twitterHandle: config.twitterHandle,
  twitterUrl: config.twitterUrl,
  githubHandle: config.githubHandle,
  githubUrl: config.githubUrl,
  lastBuildDate: new Date(Date.now()).toISOString(),
}

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata,
  plugins: [
    `gatsby-plugin-mdx-embed`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-preact`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-use-dark-mode`,
    `gatsby-plugin-mailgo`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
              rel: `noopener`,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `MDXImages`,
        path: `${__dirname}/content`,
      },
      __key: `${__dirname}/content`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: 'Rubik',
            variable: true,
            weights: ['400..900'],
          },
          {
            family: 'Fira Code',
            variable: true,
            weights: ['200..900'],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: siteMetadata.canonicalUrl,
        noTrailingSlash: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.title,
        short_name: config.title,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        theme_color_in_head: false,
        display: `minimal-ui`,
        icon: config.siteLogo, // This path is relative to the root of the site.
        icons: [
          {
            src: `/static/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/static/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
          {
            src: `/static/apple-touch-icon.png`,
            sizes: `180x180`,
            type: `image/png`,
          },
          {
            src: `/static/favicon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `/static/favicon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `/static/favicon.ico`,
            sizes: `48x48`,
            type: `image/png`,
          },
        ],
      },
    },
  ],
}
