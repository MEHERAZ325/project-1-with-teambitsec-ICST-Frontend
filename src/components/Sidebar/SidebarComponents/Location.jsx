import React from 'react'
import Button from '../../Button/Button'

const Location = () => {
  return (
    <div className='mt-[100px]  w-full'>
    <Button name='ইনস্টিটিউট লোকেশন'/>
    <iframe className='w-[220px] h-[300px] mt-2' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8709437179236!2d91.40335317430197!3d23.02851031610846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375369b2dd2d0059%3A0xfcf53a5902e16839!2sInstitute%20of%20Computer%20Science%20%26%20Technology!5e0!3m2!1sen!2sbd!4v1735010187492!5m2!1sen!2sbd"></iframe>
  </div>
  )
}

export default Location