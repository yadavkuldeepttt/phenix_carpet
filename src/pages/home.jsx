import React from 'react'
import HeroSection from '../components/home/heroSection'
import AboutSiteSection from '../components/home/aboutSiteSection'
import AboutUsSection from '../components/about/aboutUsSection'
import ProductCategory from '../components/home/prroduct/productCategory'
import ProductShowcase from '../components/home/prroduct/productShowcase'
import InstagramWall from '../components/home/instagramWall'

function Home() {
  return (
    <div>
        {/* hero section */}
        <HeroSection/>

        {/* about site section */}
        <AboutSiteSection/>

        {/* about us section */}
        <AboutUsSection/>

        {/* product category */}
        <ProductCategory/>

        {/* product showcase */}
        <ProductShowcase/>

        {/* instagram wall */}
        <InstagramWall/>
    </div>
  )
}

export default Home
