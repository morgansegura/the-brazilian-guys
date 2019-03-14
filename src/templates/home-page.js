import React from 'react'
import Hero from '../components/Hero'
import FoodMenuTeaser from '../components/FoodMenuTeaser'
import About from '../components/About'
import Instanode from '../components/Instanode'
import Contact from '../components/Contact'

const HomePageTemplate = ({ data: { prismicHomepage }, logo }) => {
  return (
    <React.Fragment>
      <Hero logo={logo} data={prismicHomepage.data.Hero} />
      <About />
      <FoodMenuTeaser />
      <Instanode />
      <Contact />
    </React.Fragment>
  )
}

export default HomePageTemplate
