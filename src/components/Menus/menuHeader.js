// import { Link } from 'gatsby'
import PropTypes from 'prop-types'
// import PreviewCompatibleImage from '../PreviewCompatibleImage'
import { StaticQuery, graphql } from 'gatsby'
import CustomLink from '../CustomLink'
import React from 'react'
import { toggleMobileNav } from '../../helpers/helpers'

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
        <nav id="navHeader" className="nav__header col-12 col-md-10">
          <div className="nav__header__inner row">
            {!!menuMain ? (
              <React.Fragment>
                <div className="nav__primary col-12">
                  {menuMain.map(({ node: item }) =>
                    item.data.navgroup.map((group, i) => (
                      <CustomLink
                        linkType={group.selectlinktype}
                        linkURL={group.link}
                        className="nav__item"
                        rel={`${group.label} - ${data.site.siteMetadata.title}`}
                        key={i}
                        onClick={toggleMobileNav}
                      >
                        {group.label}
                      </CustomLink>
                    ))
                  )}
                </div>
              </React.Fragment>
            ) : null}
          </div>
          {/*
            {!!group.icon && group.icon !== 'undefined'
              ? `<span className="iconify" data-icon=${
                  group.icon
                }></span>`
              : null}{' '}
          
          */}
          <div className="nav__header__trigger" onClick={toggleMobileNav}>
            <div className="nav__header__trigger-circle" />
            <div className="nav__header__trigger--inner" />
          </div>
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
