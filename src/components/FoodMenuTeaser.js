import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import Tabs from './Tabs/Tabs'

// import foodIMG1 from '../assets/images/sweet-buns.png'
// import foodIMG2 from '../assets/images/food1.png'

const FoodMenuTeaser = ({ data }) => (
  <StaticQuery
    query={graphql`
      query FoodMenuTeaserQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
        allPrismicTabs {
          edges {
            node {
              data {
                tabs {
                  label {
                    text
                  }
                  title {
                    text
                  }
                  subtitle {
                    text
                  }
                  content {
                    text
                  }
                  image {
                    localFile {
                      childImageSharp {
                        fluid(maxWidth: 750, quality: 92) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                  image2 {
                    localFile {
                      childImageSharp {
                        fluid(maxWidth: 750, quality: 92) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                  image3 {
                    localFile {
                      childImageSharp {
                        fluid(maxWidth: 750, quality: 92) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                  image4 {
                    localFile {
                      childImageSharp {
                        fluid(maxWidth: 750, quality: 92) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const tabs = data.allPrismicTabs.edges
      return (
        <Tabs>
          {!!tabs
            ? tabs.map(({ node: tab }) =>
                tab.data.tabs.map((item, i) => (
                  <div key={i} label={item.label.text}>
                    <div className="menu-section">
                      <div className="menu-section__intro bg__triangles">
                        <div className="container">
                          <div className="row">
                            <div className="col-12 col-lg-6">
                              <div className="menu-section__description">
                                <div className="headline__block">
                                  <h3 className="headline__title headline__title--reverse uppercase t-center">
                                    {item.title.text}
                                  </h3>
                                  <div className="hr-20 bg--gold"> </div>
                                </div>
                                <p className="content__subtitle pt-30">
                                  <span
                                    className="iconify"
                                    data-icon="mdi-vpn"
                                  />
                                  &nbsp;
                                  {item.subtitle.text}
                                </p>

                                <p className="content__text aos-tabs-anchor">
                                  {item.content.text}
                                </p>

                                <div className="menu-section__image-block">
                                  <Img
                                    className="food__img1 img--border"
                                    fluid={
                                      item.image.localFile.childImageSharp.fluid
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-lg-6">
                              <div>
                                <Img
                                  className="food__img2 img--border"
                                  fluid={
                                    item.image2.localFile.childImageSharp.fluid
                                  }
                                />
                              </div>
                              <div>
                                <Img
                                  className="food__img3 img--border"
                                  fluid={
                                    item.image3.localFile.childImageSharp.fluid
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )
            : null}
        </Tabs>
      )
    }}
  />
)

export default FoodMenuTeaser
