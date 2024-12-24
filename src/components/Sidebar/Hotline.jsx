import React from 'react'
import Button from '../Button/Button'
import Helpline from '../../images/slide/helphotline.jpg'

const Hotline = () => {
  return (
    <div className='w-[220px] h-[461px]'>
   <Button name='জরুরি হটলাইন'/>
   <div className='mt-2'>
       <div><img src={Helpline} alt="" /></div>
   </div>
  </div>
  )
}

export default Hotline