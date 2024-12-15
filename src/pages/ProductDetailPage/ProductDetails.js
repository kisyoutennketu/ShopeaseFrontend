import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'


export const ProductDetails = () => {
  const { product } = useLoaderData();
  const [image, setImage] = useState(product?.images[0]?.startsWith('http') ? product?.images[0] : product?.thumbnail);


  return (
    <div className='flex flex-col md:flex-row  p-10'>
      <div className='w-[100%] lg:w-[50%] md:w-[40%]'>
          {/* Image */}
          <div className='flex flex-col md:flex-row'>
            <div className='w-[100%] md:w-[20%] justify-center h-[40px] md:h-[420px]'>
                {/* Stack Images */}
                <div className='flex flex-row md:flex-col  justify-center h-full'>
                    {
                      product?.images[0]?.startsWith('http') && product?.images?.map((item, index) => (
                        <button onClick={() => setImage(item)} className='rounded-lg w-fit p-2 mb-2'><img src={item} className='h-[60px] w-[60px] bg-cover bg-center hover:scale-105' alt={'sample-'+index} /></button>
                      ))
                    }
                </div>
            </div>
            <div className='w-full md:w-[80%] max-h-[520px] flex justify-center md:pt-0 pt-10'>
                <img src={image} className='h-full w-full border rounded-lg cursour-pointer object-cover' alt={product?.title}/>
            </div>
          </div>
      </div>
      <div className='w-[60%]'>
          {/* Product Description */}
      </div>
    </div>
  )
}

export default ProductDetails
