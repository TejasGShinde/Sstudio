import React from 'react'
import Navbar from './Navbar'
import HeroSection from './Hero'
import About from './About'
import Portfolio from './Portfolio'
import Services from './Services'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <About />
        <Portfolio />
        <Services />
        <Contact />
    </div>
  )
}

export default Home