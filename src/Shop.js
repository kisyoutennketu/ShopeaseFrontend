import React, { useEffect } from 'react'
import HeroSection from './components/HeroSection/HeroSection'
import NewArrivals from './components/Sections/NewArrivals'
import Category from './components/Sections/Categories/Category'
import content from './data/content.json'
import Footer from './components/Footer/Footer'
import { fetchCategories } from './api/fetchCategories'
import { useDispatch } from 'react-redux'
import { loadCategories } from './store/features/category'
import { setLoading } from './store/features/common'

export const Shop = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    fetchCategories().then(res => {
      dispatch(loadCategories(res));
    }).catch(err => {

    }).finally(() => {
      dispatch(setLoading(false));
    })
  }, [dispatch]);

  return (
    <>
      
      <HeroSection />
      <NewArrivals />
      {content?.pages?.shop?.sections && content?.pages?.shop?.sections?.map((item, index) => <Category key={item?.title + index} {...item} />)}
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
// part3 https://www.youtube.com/watch?v=4nGZQbY8QTI&ab_channel=TheCodeReveal
// part4 https://www.youtube.com/watch?v=C-JTLiisKJ4&list=PLVrmtM_SYuRb9IjCT-gCz9mHilcWRorus&index=7&ab_channel=TheCodeReveal
// part6 https://www.youtube.com/watch?v=MutS1GVvCnQ&t=5371s&ab_channel=TheCodeReveal
// part 7 https://www.youtube.com/watch?v=ctcvf8sy2PI&list=PLVrmtM_SYuRb9IjCT-gCz9mHilcWRorus&index=4&ab_channel=TheCodeReveal
//util 4:45:53 / 5:35:34



