import React from 'react'
import Album from '../../../images/slide/albumicon.png'
import Button from '../../Button/Button'

const Gallery = () => {
  return (
    <div className='sm:mt-6 sm:w-[100px] sm:h-[100px] items-center justify-center sm:left-8 md:ml-[350px] md:mt-[-110px] lg:mt-6 lg:ml-0'>
    <Button name="ছবি গ্যালায়ী"/>
    <a href="">
       <img className='mt-[30px] sm:ml-[100px] md:ml-[140px] lg:ml-[70px]' src={Album} alt="" />
    </a>
  </div>
  )
}

export default Gallery