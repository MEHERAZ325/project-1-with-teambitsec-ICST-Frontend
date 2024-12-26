import React from 'react'
import Album from '../../../images/slide/albumicon.png'
import Button from '../../Button/Button'

const Gallery = () => {
  return (
    <div className='mt-6 w-[100px] h-[100px] items-center justify-center left-8'>
    <Button name="ছবি গ্যালায়ী"/>
    <a href="">
       <img className='mt-[30px] ml-[55px]' src={Album} alt="" />
    </a>
  </div>
  )
}

export default Gallery