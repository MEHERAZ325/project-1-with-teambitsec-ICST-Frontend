import React from 'react'
import Button from '../Button/Button'
import Logo from '../../images/logo/Logo.jpeg'
import { Link } from 'react-router-dom'

const ICST = () => {
  return (
   <div className='justify-center sm:top-[-50px] md:left-[350px] lg:left-0 lg:mt-[150px] w-full h-[151px] font-serif mt-[60px] md:mt-[80px] relative'>
    <Button name="ICST"/>
   <Link 
   to=""><img className=' w-[120px] sm:left-[50px] md:left-[70px] lg:left-0 sm:mt-[30px] h-[80px] ml-[50px] mr-[40px] mt-5 mb-[20px] absolute' src={Logo} alt="" />  </Link>
  </div>
  )
}

export default ICST