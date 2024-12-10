import React from 'react'
import Navigation from './components/Navigation/Navigation'
import HeroSection from './components/HeroSection/HeroSection'
import NewArrivals from './components/Sections/NewArrivals'
import Category from './components/Sections/Categories/Category'
import content from './data/content.json'
import Footer from './components/Footer/Footer'

export const Shop = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <NewArrivals />
      {content?.categories && content?.categories?.map((item, index) => <Category key={item?.title + index} {...item} />)}
      <Footer/>
    </>
  )
}

export default Shop


//reference https://www.youtube.com/watch?v=p8tBD3YTCPo&list=PLVrmtM_SYuRb9IjCT-gCz9mHilcWRorus&index=10&ab_channel=TheCodeReveal
//util 1:18:26 / 1:30:06



