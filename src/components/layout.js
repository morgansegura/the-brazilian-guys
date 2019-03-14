import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import MenuHeader from './Menus/menuHeader'

import '../assets/styles.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <script src="//code.iconify.design/1/1.0.0-rc7/iconify.min.js" />
        </Helmet>
        <div id="wrapperMain" className="wrapper">
          <Header siteTitle={data.site.siteMetadata.title} />
          <main id="contentMain" className="main">
            {children}
          </main>
          <Footer />
          <MenuHeader />
          <div id="overlay__results">
            <div className="overlay" />
          </div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
