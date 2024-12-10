import React from 'react'
import SeactionHeading from '../SectionHeading/SectionHeading'
import Card from '../../Card/Card'

export const Category = ({title, data}) => {
  return (
    <>
    <SeactionHeading title={title}/>
    <div className='flex px-8'>
    {data && data?.map((item, index) => {
        return (
            <Card title={item?.title} description={item?.description} imagePath={item?.image} actionArrow={true} height={'240px'} width={'200px'} />
        )
    })}
    </div>
    </>
  )
}

export default Category
