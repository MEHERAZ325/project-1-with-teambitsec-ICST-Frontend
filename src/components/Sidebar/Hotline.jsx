import React from 'react'
import Button from '../Button/Button'
import Helpline from '../../images/slide/helphotline.jpg'

const Hotline = () => {
  return (
    <div className='w-[220px] sm:mt-9 h-[461px] md:ml-[350px] lg:ml-0'>
   <Button name='জরুরি হটলাইন'/>
   <div className='mt-2'>
       <div><img className='sm:ml-[50px] md:ml-[70px] lg:ml-0' src={Helpline} alt="" /></div>
   </div>
  </div>
  )
}

export default Hotline