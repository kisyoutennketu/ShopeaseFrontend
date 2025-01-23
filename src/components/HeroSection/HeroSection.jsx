import React from 'react'
import HeroImg from '../../assets/img/EC-site-image.jpg'
import { NavLink } from 'react-router-dom'

export const HeroSection = () => {
  return (
    <div className='relative flex items-center bg-cover text-left flext-start bg-center h-screen w-full' style={{backgroundImage : `url(${HeroImg})`}}>
        <div className='absolute top-0 right-0 bottom-0 left-0'></div>
            <main className='px-10 lg:px-24 z-10'>
                <div className='text-left'>
                    <h2 className='text-2xl text-white'>T-shirt / Tops</h2>
                </div>
                <p className='mt-3 text-white sm:mt-5 sm:max-w-xl text-6xl'>
                    Summer
                    Value Pack
                </p>
                <p className='mt-3 text-white sm:mt-5 sm:max-w-xl text-2xl'>
                    cool / colorful / comfy
                </p>
                <NavLink to='/men' className='border rounded mt-6 border-black hover:bg-white hover:text-black hover:border-black text-white bg-black w-44 h-12'>
                    Shop Now for men
                </NavLink>
                <NavLink to='/women' className='ml-5 border rounded mt-6 border-black hover:bg-white hover:text-black hover:border-black text-white bg-black w-44 h-12'>
                    Shop Now for women
                </NavLink>
                
            </main>
        
    </div>
  )
}

export default HeroSection
