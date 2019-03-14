// import { Link } from 'gatsby'
import PropTypes from 'prop-types'
// import PreviewCompatibleImage from '../PreviewCompatibleImage'
import { StaticQuery, graphql } from 'gatsby'
// import CustomLink from '../CustomLink'
import React from 'react'
import { toggleMobileNav, scrollUpDown } from '../../helpers/helpers'

const MenuHeader = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      query MenuHeaderQuery {
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
                  link {
                    id
                    slug
                    target
                    url
                  }
                  label {
                    text
                  }
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
        <nav id="navHeader" className="nav__header col-12 col-md-10">
          <div className="nav__header__inner row">
            {!!menuMain ? (
              <React.Fragment>
                <div className="nav__primary col-12">
                  {menuMain.map(({ node: item }) =>
                    item.data.navgroup.map((group, i) => (
                      <a
                        onClick={toggleMobileNav}
                        key={i}
                        className="nav__item"
                        data-scroll
                        href={`#${group.link.slug}`}
                        title={`${group.label.text} ${
                          data.site.siteMetadata.title
                        }`}
                      >
                        {group.label.text}
                      </a>
                    ))
                  )}
                </div>
              </React.Fragment>
            ) : null}
          </div>

          <div className="nav__header__trigger" onClick={toggleMobileNav}>
            <div className="nav__header__trigger-circle" />
            <div className="nav__header__trigger--inner" />
          </div>

          <a className="nav__top-bottom__trigger" href="#">
            <div className="nav__top-bottom__trigger-circle" />
            <div className="nav__top-bottom__trigger--inner" />
          </a>
        </nav>
      )
    }}
  />
)

MenuHeader.propTypes = {
  siteTitle: PropTypes.string,
}

MenuHeader.defaultProps = {
  siteTitle: ``,
}

export default MenuHeader
