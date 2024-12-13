import React from 'react'

export const ProductCard = ({title, description, price, discount, rating, brand, thumbnail}) => {
  return (
    <div className='flex flex-col hover:scale-105 '>
        <img className={`h-[320px] w-[280px]
            border rounded-lg cursour-pointer object-cover `} src={thumbnail} alt='Jeans' />
            <div className='flex justify-between items-center'>
                <div className='flex flex-col pt-2 '>
                    <p className='text-[16px] p-1'>{title}</p>
                    {description && <p className='text-[12px] px-1 text-gray-600'>{brand}</p>}
                </div>
                <div>
                    <p>{price}</p>
                </div>
            </div>
    </div>
  )
}
