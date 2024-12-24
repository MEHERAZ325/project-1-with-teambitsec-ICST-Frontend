import React from 'react'
import Album from '../../../images/slide/albumicon.png'
import Button from '../../Button/Button'

const Gallery = () => {
  return (
    <div className='mt-6 w-[220px] h-[191px]'>
    <Button name="ছবি গ্যালায়ী"/>
    <a href="">
       <img className='mt-2' src={Album} alt="" />
    </a>
  </div>
  )
}

export default Gallery