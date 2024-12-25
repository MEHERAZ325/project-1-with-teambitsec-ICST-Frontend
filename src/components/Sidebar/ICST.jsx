import React from 'react'
import Button from '../Button/Button'
import Logo from '../../images/logo/Logo.jpeg'

const ICST = () => {
  return (
    <div><div className='w-full h-[151px] font-serif mt-[60px]  relative'>
    <Button name="ICST"/>
   <a href=""><img className=' w-[120px] h-[80px] ml-[50px] mr-[40px] mt-5 mb-[20px] absolute' src={Logo} alt="" />  </a>
  </div></div>
  )
}

export default ICST