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
import { overlayClose, scrollPosition } from '../helpers/helpers'
import SmoothScroll from 'smooth-scroll'
import { AST_False } from 'terser'

export default class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSplashPage: false,
      bodyClassList: ' is--mobile-nav mobile-nav--is-closed',
    }
  }
  componentDidMount() {
    const scroll = new SmoothScroll('a[href*="#"]', {
      ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
      header: null,
      topOnEmptyHash: true,

      // Speed & Duration
      speed: 500,
      speedAsDuration: false,
      durationMax: null,
      durationMin: null,
      clip: true,

      easing: 'easeInOutCubic',
      customEasing: function(time) {
        return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time
      },
      updateURL: false, // Update the URL on scroll
      popstate: false,

      // Custom Events
      emitEvents: true, // Emit custom events
    })
    overlayClose(document.querySelector('.overlay'))
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
