import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

const About = ({ data }) => (
  <StaticQuery
    query={graphql`
      query AboutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
        allPrismicAboutSection {
          edges {
            node {
              data {
                about_title {
                  text
                }
                about_content_title {
                  text
                }
                about_content_body {
                  text
                }
                more_content_title {
                  text
                }
                more_content_body {
                  text
                }
                locations_title {
                  text
                }
                locations_table {
                  link {
                    link_type
                    url
                    target
                  }
                  locations_table_title {
                    text
                  }
                  days
                  hours
                  address {
                    text
                  }
                  date_icon
                  address_icon
                }
                about_image {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 750, quality: 92) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
                small_image {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 750, quality: 92) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
                large_image {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 770, quality: 92) {
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
    `}
    render={data => {
      const aboutContent = data.allPrismicAboutSection.edges
      // console.log(tabs)
      return (
        <section id="who-we-are" className="about-us bg__bottom-right bg__bottom-left">
          {!!aboutContent
            ? aboutContent.map(({ node: content }, i) => (
                <div key={i} className="container">
                  <div className="row">
                    <div className="col-12 col-lg-4">
                      <div className="content content__center">
                        <h3 className="headline__title headline__title--reverse headline__title--full uppercase t-center">
                          {content.data.about_title.text}
                        </h3>
                        <div className="hr-20 bg--gold mb-30"> </div>

                        <div className="row">
                          <div className="content__box-image col-12 col-sm-6 col-lg-12 order-sm-2 order-lg-1">
                            <Img
                              className="img--border"
                              fluid={
                                content.data.about_image.localFile
                                  .childImageSharp.fluid
                              }
                            />
                          </div>
                          <div className="content__box-text more__content align-self-center col-12 col-sm-6 col-lg-12 order-sm-1 order-lg-2">
                            <p className="content__subtitle">
                              <span className="iconify" data-icon="mdi-vpn" />{' '}
                              {content.data.more_content_title.text}
                            </p>
                            <p className="content__text">
                              {content.data.more_content_body.text}
                            </p>
                          </div>
                        </div>

                        <div className="row">
                          <div className="content__box-image more__image-small col-12 col-sm-6 col-lg-12">
                            <Img
                              className="img--border"
                              fluid={
                                content.data.small_image.localFile
                                  .childImageSharp.fluid
                              }
                            />
                          </div>

                          <div className="content__box-text more__content align-self-center col-12 col-sm-6 col-lg-12">
                            <p className="content__subtitle">
                              <span className="iconify" data-icon="mdi-vpn" />{' '}
                              {content.data.more_content_title.text}
                            </p>
                            <p className="content__text">
                              {content.data.more_content_body.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-8">
                      <div className="row">
                        <div className="col-12 more__image-large">
                          <Img
                            className="img--border"
                            fluid={
                              content.data.large_image.localFile.childImageSharp
                                .fluid
                            }
                          />
                        </div>

                        {/* Locations Widget */}
                        <div className="location__widget col-12 mt-30">
                          <div className="row no-gutters">
                            <div className="col-12">
                              <h3 className="headline__title headline__title--reverse headline__title--full uppercase t-center">
                                {content.data.locations_title.text}
                              </h3>
                              <div className="hr-20 bg--green" />
                            </div>

                            {!!content.data.locations_table
                              ? content.data.locations_table.map(
                                  (location, i) => (
                                    <div
                                      key={i}
                                      className={` col-12 col-lg-6 location__table ${
                                        i % 2 === 0
                                          ? 'location__even'
                                          : 'location__odd'
                                      }`}
                                    >
                                      <a
                                        href={location.link.url}
                                        title={`${
                                          location.locations_table_title.text
                                        } hours`}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                      >
                                        <p className="b8 t-center location__title">
                                          {location.locations_table_title.text}
                                        </p>
                                        <p className="location__address">
                                          {location.address.text}
                                        </p>
                                        <p className="location__time">
                                          {location.days} {location.hours}
                                        </p>
                                      </a>
                                    </div>
                                  )
                                )
                              : null}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </section>
      )
    }}
  />
)

export default About
