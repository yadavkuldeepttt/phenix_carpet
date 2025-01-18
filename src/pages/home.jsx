import React from 'react'
import HeroSection from '../components/home/heroSection'
import AboutSiteSection from '../components/home/aboutSiteSection'
import AboutUsSection from '../components/about/aboutUsSection'

function Home() {
  return (
    <div>
        {/* hero section */}
        <HeroSection/>

        {/* about site section */}
        <AboutSiteSection/>

        {/* about us section */}
        <AboutUsSection/>
    </div>
  )
}

export default Home
