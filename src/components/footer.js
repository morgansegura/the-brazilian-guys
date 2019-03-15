import PropTypes from 'prop-types'
// import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import CustomLink from './CustomLink'
import React from 'react'

const Footer = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        site {
          siteMetadata {
            title
          }
        }
        allPrismicWidgetNavigation {
          edges {
            node {
              data {
                navgroup {
                  selectlinktype
                  link
                  label
                  icon
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const menuMain = data.allPrismicWidgetNavigation.edges
      return (
        <footer id="footerMain" className="footer">
          <div className="container">
            <div className="footer__segment footer__info row">
              <div className="col-12 col-lg-4">
                <div className="footer__logo" />
                <div className="address__block">
                  <p className="address">
                    3085 Reynard Way, San Diego, CA 92103
                  </p>
                  <p className="phone">
                    Email:{' '}
                    <a href="mailto:thebrazilianguys@gmail.com">
                      thebrazilianguys@gmail.com
                    </a>
                  </p>
                  <p className="phone">
                    Phone: <a href="tel:1-619-905-7561">(619) 905-7561</a>
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <nav className="nav__footer">
                  <h3 className="heading">
                    <span className="underline">Navigation</span>
                  </h3>
                  {!!menuMain ? (
                    <React.Fragment>
                      {menuMain.map(({ node: item }) =>
                        item.data.navgroup.map((group, i) => (
                          <CustomLink
                            linkType={group.selectlinktype}
                            linkURL={group.link}
                            className="nav__item"
                            rel={`${group.label} - ${
                              data.site.siteMetadata.title
                            }`}
                            key={i}
                          >
                            {group.label}
                          </CustomLink>
                        ))
                      )}
                    </React.Fragment>
                  ) : null}
                </nav>
              </div>
              <div className="col-12 col-lg-4">
                <nav className="nav__footer">
                  <h3 className="heading">
                    <span className="underline">In the Media</span>
                  </h3>
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    title="As seen on The Food Network"
                    className="nav__item"
                    href="https://gay-sd.com/cast-iron-magic/"
                  >
                    The Food Network
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    title="As seen on San Diego Voyager"
                    className="nav__item"
                    href="https://gay-sd.com/cast-iron-magic/"
                  >
                    San Diego Voyager
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    title="As seen on Uptown News San Diego"
                    className="nav__item"
                    href="http://sdvoyager.com/interview/meet-ricardo-oriente-mendes-camilo-quadros-brazilian-guys-mission-hills/"
                  >
                    Uptown News San Diego
                  </a>
                </nav>
              </div>
              <p className="col-12 segura__block">
                &copy; {new Date().getFullYear()}. All Rights Reserved.
              </p>
              <div className="col-12 segura__block">
                <p>
                  <a href="https://www.gatsbyjs.org">
                    Built with{' '}
                    <span
                      data-icon="mdi-gatsby"
                      className="iconify gatsby__icon"
                    />
                  </a>{' '}
                  by{' '}
                  <a
                    className="segura__logo"
                    href="segurawebdesign.netlify.com"
                  >
                    Segura
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      )
    }}
  />
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
