const setup = {
  title:
    'Catapult Arts | Custom Web Design, Future Proof Development, Masterful Marketing',
  short_name: 'Catapult Arts',
  keywords:
    'Affordable, Custom Web Design, Programming, Freelance Web developer, Small Business Website, Personal Website',
  description: `Catapult Arts offers premium, cost effective, custom Web Design, future proof Web Development and masterful Search Engine Optimization, Search Engine Marketing, Analytics and Social Media Marketing for Small Businesses in Southern California and around the World.`,
  copyright: 'Copyright &copy; 2018. Catapult Arts',
  canonicalUrl: 'https://the-brazilian-guys.netlify.com',
  image: 'src/assets/images/logo-red.png',
  author: {
    name: 'Morgan Segura',
    minibio: `
        <strong>Morgan Segura</strong> is a lead developer & architect at Welk Resorts.
        He’s a frequent <a href="/speaking">speaker</a>, occasional
        <a href="https://dribbble.com/jlengstorf">designer</a>, and an advocate of
        building better balance via efficiency. He lives in Portland, Oregon.
      `,
  },
  siteUrl: 'https://the-brazilian-guys.netlify.com/',
  startUrl: 'https://',
  pathPrefix: '/',
  icon: 'logo-red.png',
  rssFeed: '',
  organization: {
    name: 'Catapult Arts',
    url: 'https://the-brazilian-guys.netlify.com',
    logo: 'icons/android-chrome-512x512.png',
  },
  social: {
    twitter: '@codestandard',
    fbAppID: '',
  },
  googleAnalyticsId: 'UA-131102503-1',
}

exports.meta = async ({ graphql }) => {
  return await graphql(`
    {
      prismicSiteMetadata {
        data {
          site_url
          title
          short_name
          keywords
          description
          copyright
          siteUrl
          icon
          rssFeed
          twitterID
          fbAppID
          instagramID
          googleAnalyticsId
        }
      }
    }
  `)
}
