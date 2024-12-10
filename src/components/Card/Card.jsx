import React from 'react'
import ArrowIcon from '../common/ArrowIcon'

export const Card = ({imagePath, title, description, actionArrow, height, width}) => {
  return (
    <div className='flex flex-col p-6'>
        <img className={`h-[${height? height:'240px'}] w-[${width? width:'200px'}] bg-cover bg-center border rounded hover:scale-105 cursor-pointer`} src={imagePath} alt="Jeans" />
        <div className='flex justify-between items-center'>
          <div className='flex flex-col'>
            <p className='text-[16px] p-2'>{title}</p>
            {description && <p className='text-[16px] px-1 text-gray-600'>{description}</p>}
          </div>
          {actionArrow && <span className='cursor-pointer pr-2 items-center'><ArrowIcon/> </span>}
        </div>
        
    </div>
  )
}

export default Card
