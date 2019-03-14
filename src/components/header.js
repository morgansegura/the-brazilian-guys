import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
// import PreviewCompatibleImage from './PreviewCompatibleImage'
// import { scrollHeader } from '../helpers/helpers'

const Header = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            title
          }
        }
        # getLogo: allMarkdownRemark(
        #   filter: { frontmatter: { logoImage: { image: { ne: null } } } }
        # ) {
        #   edges {
        #     node {
        #       frontmatter {
        #         logoImage {
        #           image
        #           alt
        #         }
        #       }
        #     }
        #   }
        # }
      }
    `}
    render={data => {
      // scrollHeader()
      // const { title: logoText } = data.site.siteMetadata
      // const { logoImage: logo } = data.getLogo.edges[0].node.frontmatter
      return (
        <>
          <header id="headerMain" className="header unfill">
            <div className="header__inner container">
              <div className="row no-gutters align-items-center">
                <div className="header__branding col-12 col-md">
                  <Link to="/">
                    {/*!!logo ? (
                      <div className="header__logo">
                        <PreviewCompatibleImage imageInfo={logo} />
                      </div>
                    ) : (
                      <h2 className="header__text">{logoText}</h2>
                    )*/}
                    <div className="header__logo" />
                  </Link>
                </div>
              </div>
            </div>
          </header>
        </>
      )
    }}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
