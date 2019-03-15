import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import Plx from 'react-plx'
import logoCircle from '../assets/images/logo-no-text.svg'
import { animateText } from '../helpers/helpers'

export default class Hero extends Component {
  constructor(props) {
    super(props)

    this.state = {
      copyArr: [
        {
          hashtag: 'glutenfree',
          link: 'https://www.instagram.com/explore/tags/glutenfree/',
        },
        {
          hashtag: 'stuffedhashbrowns',
          link: 'https://www.instagram.com/explore/tags/stuffedhashbrowns/',
        },
        {
          hashtag: 'brazil',
          link: 'https://www.instagram.com/explore/tags/brazil/',
        },
        {
          hashtag: 'thebrazilianguys',
          link: 'https://www.instagram.com/explore/tags/thebrazilianguys/',
        },
        {
          hashtag: 'sandiego',
          link: 'https://www.instagram.com/explore/tags/sandiego/',
        },
      ],
    }
  }
  componentDidMount() {
    // console.log(this.state.copyArr[0].hashtag)
    this.setState({
      // textElem: document.getElementById('rotateText'),
    })
    animateText(
      document.getElementsByClassName('word'),
      document.createElement('span')
    )
  }
  componentDidUpdate() {}

  render() {
    // const splitCopy = '#glutenfree'.split('')
    // const spreadSplitText = [
    //   {
    //     start: 0,
    //     end: 500,
    //     properties: [
    //       {
    //         startValue: 0,
    //         endValue: 100,
    //         property: 'translateX',
    //       },
    //     ],
    //   },
    // ]
    // const logoScale = [
    //   {
    //     start: 0,
    //     end: 500,
    //     properties: [
    //       {
    //         startValue: 0.5,
    //         endValue: 3,
    //         property: 'scale',
    //       },
    //     ],
    //   },
    // ]
    return (
      <section id="home" className="parallax__hero bg__hero-text">
        {/* Logo Block */}
        <div className="logo">
          <img
            className="logo__circle"
            src={logoCircle}
            alt="The Brazilian Guys founded 2015"
          />
        </div>

        <div className="under__circle" />

        {/* Parallax Text */}
        <div className="parallax__hero-content">
          <div className="text">
            <h3 className="headline__title uppercase d-flex justify-content-center align-items-center">
              {this.state.copyArr.map((word, i) => (
                <a
                  key={i}
                  href={word.link}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="word">#{word.hashtag}</span>
                </a>
              ))}
            </h3>
          </div>

          <p className="headline__subtitle">
            &nbsp;&nbsp;Home of the stuffed hashbrowns!{' '}
            <span className="copyright__icon">&copy;</span>
          </p>
          <div className="hero__social-media">
            <a
              href="https://www.instagram.com/thebrazilianguys/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="iconify facebook" data-icon="mdi-facebook" />
            </a>
            <a
              href="https://www.instagram.com/thebrazilianguys/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="iconify instagram" data-icon="mdi-instagram" />
            </a>
            <a
              href="https://www.instagram.com/thebrazilianguys/"
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
  }
}
