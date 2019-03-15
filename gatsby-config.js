require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const { meta: prismicSiteMetadata } = require('./src/helpers/siteMetadata')
const { data } = prismicSiteMetadata
console.log(prismicSiteMetadata)
module.exports = {
  siteMetadata: {
    title: prismicSiteMetadata.title || '',
    siteUrl:
      prismicSiteMetadata.site_url || 'https://the-brazilian-guys.netlify.com',
    shortName: prismicSiteMetadata.short_name || '',
    keywords: prismicSiteMetadata.keywords || '',
    description: prismicSiteMetadata.description || '',
    copyright: prismicSiteMetadata.copyright || '',
    icon: prismicSiteMetadata.icon,
    rssFeed: prismicSiteMetadata.rssFeed || '',
    twitterID: prismicSiteMetadata.twitterID || '',
    fbAppID: prismicSiteMetadata.fbAppID || '',
    instagramID: prismicSiteMetadata.instagramID || '',
    googleAnalyticsId: 'UA-131102503-1' || '',
  },

  plugins: [
    // Files system
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: prismicSiteMetadata.googleAnalyticsId,
      },
    },
    // Media
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        stripMetadata: true,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `thebrazilianguys`,
      },
    },
    // Performance
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        // name: siteMetadata.title,
        // shortName: siteMetadata.short_name,
        // shortUrl: siteMetadata.site_url,
        // siteUrl: siteMetadata,
        // startUrl: '/',
        display: 'standalone',
        query: `
        {
          site {
            siteMetadata {
              title
              siteUrl
              shortName
              shortUrl
              startUrl
            }
          }
          allSitePage {
            edges {
              node {
                path
              }
            }
          }
        }`,
        // icon: `${__dirname}/src/assets/images/${prismicSiteMetadata.icon}`,
        icon: `src/assets/images/gatsby-icon.png`,
        legacy: true,
      },
    },
    // `gatsby-plugin-netlify-cache`,
    // `gatsby-plugin-remove-serviceworker`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        rejected: true,
        printRejected: true,
        develop: true,
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `${process.env.PRISMIC_REPO}`,
        accessToken: `${process.env.PRISMIC_API_KEY}`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
      },
    },
    'gatsby-plugin-netlify',
  ],
}
