import React from 'react'
import HeroSection from './components/HeroSection/HeroSection'
import NewArrivals from './components/Sections/NewArrivals'
import Category from './components/Sections/Categories/Category'
import content from './data/content.json'
import Footer from './components/Footer/Footer'

export const Shop = () => {
  return (
    <>
      
      <HeroSection />
      <NewArrivals />
      {content?.categories && content?.categories?.map((item, index) => <Category key={item?.title + index} {...item} />)}
      <Footer content={content.footer} />
    </>
  )
}

export default Shop


//reference 
//github https://github.com/pardeep16/shopEase
//youtube 
// part1 https://www.youtube.com/watch?v=p8tBD3YTCPo&list=PLVrmtM_SYuRb9IjCT-gCz9mHilcWRorus&index=10&ab_channel=TheCodeReveal
// part2 https://www.youtube.com/watch?v=LdEO5nPOaa0&ab_channel=TheCodeReveal
//util 20:50 / 27:37



