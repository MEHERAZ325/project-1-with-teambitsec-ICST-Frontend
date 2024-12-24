import React from 'react'
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const TopBlueRow = () => {
  return (
    <div className='bg-[#0e91e7] max-w-[960px] w-full h-[40px] truncate flex items-center justify-between sm:[60%] shadow-xl'>
       <div className="contact flex justify-between items-center mb-1">
       <div className='flex items-center'>
        <IoMdMail className='text-white text-2xl md:mt-1 sm:mt-0 sm:ml-1 sm:mr-1 sm:text-[20px] md:font-extrabold md:text[24px]'/>
        <Link className='text-white text-[12px] md:text-[15px] ml-1  font-arial underline' to="/">icst69016@gmail.com <span className='sm:text-[12px] md:text-[20px] items-center sm:ml-1'>|</span> </Link>
        </div>
        <div className='flex ml-1  md:mt-1 items-center relative'>
        <FaPhoneAlt className='text-white text-2xl ml-3 sm:m-1 sm:text-[15px] '/>
        <p className='text-white sm:text-[12px] md:text-[15px] mr-2 font-thin'>01673-442353</p>
        </div>
       </div>
       {/* contact end */}
    <div className='social-links flex justify-between gap-3 sm:gap-2 sm:mr-1'>
     <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
     <FaFacebook className='text-white sm:text-[15px] md:text-[20px] hover:bg-white hover:text-blue-600 duration-200 rounded-full border-none outline-none'/>
     </a>
     <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
     <FaXTwitter className='text-white  sm:text-[15px] md:text-[20px] hover:bg-transparent hover:text-black duration-200  border-none outline-none'/>
     </a>
     <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
     <FaInstagram className='text-white sm:text-[15px] md:text-[20px] hover:bg-transparent hover:text-pink-500 duration-200 border-none outline-none'/>
     </a>
    </div>
    </div>
  )
}

export default TopBlueRow