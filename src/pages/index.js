import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
// import Helmet from "react-helmet"
import Layout from '../components/layout'
// import SEO from "../components/SEO"
import SplashPageTemplate from '../templates/splash-page'
import HomePageTemplate from '../templates/home-page'
import logo from '../assets/images/logo.svg'
// import SEO from '../components/seo'
import { overlayClose, smoothScroll } from '../helpers/helpers'

export default class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSplashPage: false,
      bodyClassList: ' is--mobile-nav mobile-nav--is-closed',
    }
  }
  componentDidMount() {
    // Implement smmoth scrooling
    smoothScroll()
    // function to close overlay on container click or esc key
    overlayClose(document.querySelector('.overlay'))
    // add classes to the body tag
    const body = document.getElementsByTagName('body')[0]
    body.className += this.state.bodyClassList
  }
  componentWillUnmount() {}

  render() {
    return (
      <React.Fragment>
        {this.state.showSplashPage === true ? (
          <SplashPageTemplate />
        ) : (
          <Layout>
            <HomePageTemplate logo={logo} data={this.props.data} />
          </Layout>
        )}
      </React.Fragment>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    prismicHomepage {
      data {
        title {
          text
        }
        content {
          html
        }
      }
    }
    allPrismicHomepage {
      edges {
        node {
          data {
            body {
              __typename
            }
          }
        }
      }
    }
  }
`
