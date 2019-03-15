const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allPrismicPost {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `)

  const siteMetadata = await graphql(`
    {
      prismicSiteMetadata {
        edges {
          node {
            title
            short_name
            keywords
            description
            copyright
            conanical_url
            author {
              name
              minibio
            }
            siteURL
          }
        }
      }
    }
  `)

  const template = path.resolve('src/templates/post.js')

  pages.data.allPrismicPost.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: template,
      context: {
        uid: edge.node.uid,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /smooth-scroll/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
