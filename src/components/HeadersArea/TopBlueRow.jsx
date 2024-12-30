import React from 'react'
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const TopBlueRow = () => {
  return (
    <div className='w-full sm:w-[330px] md:w-[720px] lg:w-[960px]  max-w-[960px] mx-auto bg-[#32758b] px-3'>
      <div className='flex justify-between items-center'>
      <div className="flex justify-between">
       <div className='flex items-center'>
        <IoMdMail className='text-white text-2xl md:mt-1 sm:mt-0 sm:ml-1 sm:mr-1 sm:text-[20px] md:font-extrabold md:text[24px]'/>
        <Link className='text-white text-[10px] md:text-[15px] ml-1  font-arial ' to="#">icst69016@gmail.com <span className='sm:text-[12px] md:text-[20px] items-center sm:ml-1'>|</span> </Link>
        </div>
        <div className='flex ml-1  md:mt-1 items-center relative'>
        <FaPhoneAlt className='text-white text-2xl ml-3 sm:m-1 sm:text-[15px] '/>
        <p className='text-white sm:text-[10px] md:text-[15px] mr-2 font-thin'>01673-442353</p>
        </div>
       </div>
       {/* contact end */}
    <div className='social-links flex gap-3'>
     <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
     <FaFacebook className='text-white sm:text-[15px] md:text-[20px]'/>
     </a>
     <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
     <FaXTwitter className='text-white sm:text-[15px] md:text-[20px]'/>
     </a>
     <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
     <FaLinkedinIn className='text-white sm:text-[15px] md:text-[20px] '/>
     </a>
    </div>
      </div>
    </div>
  )
}

export default TopBlueRow