import React, { Component } from 'react'
import { animateText } from '../helpers/helpers'
import { StaticQuery, graphql } from 'gatsby'

export default class Hero extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  componentDidMount() {
    animateText(
      document.getElementsByClassName('word'),
      document.createElement('span')
    )
  }
  componentDidUpdate() {}

  render() {
    return (
      <StaticQuery
        query={graphql`
          query TextSliderQuery {
            site {
              siteMetadata {
                title
              }
            }

            allPrismicTextSlider {
              edges {
                node {
                  data {
                    group {
                      label
                      link {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const { data: textSlider } = data.allPrismicTextSlider.edges[0].node
          // console.log(textSlider)
          return (
            <section id="home" className="hero parallax__hero bg__hero-text">
              {/* Logo Block */}
              <div className="logo">
                <div className="logo__circle" />
              </div>

              <div className="under__circle" />

              {/* Parallax Text */}
              <div className="parallax__hero-content">
                <div className="text">
                  <h3 className="headline__title uppercase d-flex justify-content-center align-items-center">
                    {textSlider.group.map((word, i) => (
                      <a
                        key={i}
                        href={word.link.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="word__link"
                      >
                        <span className="word">{word.label}</span>
                      </a>
                    ))}
                  </h3>
                </div>
                <p className="headline__subtitle">
                  &nbsp;&nbsp;Home of the stuffed hashbrowns!{' '}
                  <span className="copyright__icon">&copy;</span>
                </p>
                <div className="address__block">
                  <p className="address">
                    <span className="overline">
                      3085 Reynard Way, San Diego, CA 92103
                    </span>
                  </p>
                  <p className="phone">
                    Email:{' '}
                    <a href="mailto:thebrazilianguys@gmail.com">
                      thebrazilianguys@gmail.com
                    </a>
                  </p>
                  <p className="phone">
                    <span className="underline">
                      Phone: <a href="tel:1-619-905-7561">(619) 905-7561</a>
                    </span>
                  </p>
                </div>

                <div className="hero__social-media">
                  <a
                    title="Visit us on Facebook."
                    href="https://www.facebook.com/thebrazilianguys/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span
                      className="iconify facebook"
                      data-icon="mdi-facebook"
                    />
                  </a>
                  <a
                    title="Visit us on Instagram."
                    href="https://www.instagram.com/thebrazilianguys/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span
                      className="iconify instagram"
                      data-icon="mdi-instagram"
                    />
                  </a>
                  <a
                    title="Visit us on Yelp."
                    href="https://www.yelp.com/biz/the-brazilian-guys-san-diego?osq=the+brazilian+guys"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="iconify yelp" data-icon="mdi-yelp" />
                  </a>
                </div>
              </div>
              {/* Textual BG */}
              <div className="parallax__hero-bg__text">
                <div className="the">
                  <span className="t">T</span>
                  <span className="h">H</span>
                  <span className="e">E</span>
                </div>
                <div className="brazilian">
                  <span className="b">B</span>
                  <span className="r">R</span>
                  <span className="a">A</span>
                  <span className="z">Z</span>
                  <span className="i">I</span>
                  <span className="l">L</span>
                  <span className="i2">I</span>
                  <span className="a2">A</span>
                  <span className="n">N</span>
                </div>
                <div className="guys">
                  <span className="g">G</span>
                  <span className="u">U</span>
                  <span className="y">Y</span>
                  <span className="s">S</span>
                </div>
              </div>
            </section>
          )
        }}
      />
    )
  }
}
