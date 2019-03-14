import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import Plx from 'react-plx'

const Instanode = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      query InstanodeQuery {
        site {
          siteMetadata {
            title
          }
        }
        allInstaNode {
          edges {
            node {
              id
              likes
              comments
              mediaType
              preview
              original
              timestamp
              caption
              localFile {
                childImageSharp {
                  fluid(maxWidth: 250, maxHeight: 250, quality: 82) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      // console.log(data)
      const parallaxData = [
        {
          start: 0,
          end: 1000,
          properties: [
            {
              startValue: 2,
              endValue: 1,
              property: 'scale',
            },
          ],
        },
      ]
      return (
        <section className="instanode__container relative">
          <div className="container container--md">
            <a
              data-aos="fade-in"
              href="https://www.instagram.com/thebrazilianguys/"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit The Brazilian Guys on Instagram."
            >
              <h3 className="headline__title t-center uppercase">
                <span className="iconify" data-icon="mdi-instagram" />
                &nbsp;thebrazilianguys
              </h3>
            </a>
          </div>
          <div className="instanode">
            <div className="instanode__inner">
              <Plx parallaxData={parallaxData}>
                <div className="row no-gutters">
                  {data.allInstaNode.edges.map(({ node: item }) => (
                    <a
                      href="https://www.instagram.com/thebrazilianguys/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title={item.caption}
                      key={item.id}
                      className="instanode__item col-3 col-lg-2 col-xl-1"
                    >
                      <Img fluid={item.localFile.childImageSharp.fluid} />
                    </a>
                  ))}
                </div>
              </Plx>
            </div>
          </div>{' '}
        </section>
      )
    }}
  />
)

Instanode.propTypes = {
  siteTitle: PropTypes.string,
}

Instanode.defaultProps = {
  siteTitle: ``,
}

export default Instanode
