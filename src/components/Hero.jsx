import React from 'react'
import Img from '../images/slide/image6.jpeg'

import Button from './Button/Button'
import '../components/Hero.css'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar/Sidebar'
import Notice from './Notice/Notice'


const Hero = () => {
  return (
    <div className='container w-[100%] shadow-2xl flex order-1'>
        {/* start */}
       <div className='w-[720px] sm:[330px] mr-3 relative'>
        <div className='w-full absolute shadow-xl'>
        <a href="#">
            <img src={Img} className='w-[720px] sm:w-full h-[380px]' alt="" />
        </a>
       <div className='md:w-[720px] sm:w-[330px] h-[32px] bg-[#e6e7e8] justify-center text-gray-600'>
       <marquee style={{marginTop:"5px"}} title='***৪ বছর মেয়াদী ডিপ্লোমা-ইন-ইঞ্জিনিয়ারিং কোর্সে ২৩  তম ব্যাচে সরকারি বৃত্তির সুবিধাসহ  ভর্তি চলছে |'  behavior="scroll" direction="left">
       ***৪ বছর মেয়াদী ডিপ্লোমা-ইন-ইঞ্জিনিয়ারিং কোর্সে ২৩  তম ব্যাচে সরকারি বৃত্তির সুবিধাসহ  ভর্তি চলছে |
        </marquee>
       </div>
        <Notice/>
        </div>
       </div>
       {/* end */}

       {/* Sidebar start */}
        <Sidebar/>
       {/* Sidebar end */}
  
    </div>
  )
}

export default Hero