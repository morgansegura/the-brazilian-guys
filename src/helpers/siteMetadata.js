exports.meta = async ({ graphql }) => {
  return await graphql(`
    {
      prismicSiteMetadata {
        data {
          title
          siteurl
          shortname
          keywords
          description
          copyright
          rssfeed
          fbappid
          instagramid
          googleanalyticsid
          icon {
            localFile {
              publicURL
              id
              relativePath
            }
          }
        }
      }
    }
  `)
}
