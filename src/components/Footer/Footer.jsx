import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <>
      <div className='justify-between sm:w-[312px] sm:h-[222px] md:h-[152px] sm:mt-[120px] bg-[#e6e5e5] flex md:w-full  lg:w-[962px] lg:mt-[400px]'>
        <div className='mt-5 ml-5'>
            <h4 className='text-sm mb-1 sm:mb-0 sm:text-xs text-[#4a4646] font-bold'>ইনস্টিটিউট অব কম্পিউটার সায়েন্স এন্ড টেকনোলজি</h4>
            <p className='text-xs mb-2 sm:mb-1 text-[#443f3f]'>সদর হাসপাতাল রোড - ৩৯০০, ফেনী, বাংলাদেশ</p>
            <p className='text-[13px] sm:mb-1 text-bold text-[#443f3f]'>+8801673442353</p>
            <div className='md:flex sm:block'>
                <p className='text-[14px] mr-4 text-[#4b4444]'>icst69016@gmail.com</p>
                <p className='text-[14px] mr-4 text-[#4b4444]'>info@icst.edu.bd</p>
                <p className='text-[14px] mr-4 text-[#4b4444]'>Web- icstfeni.edu.bd</p>
            </div>
        </div>
        <div className='text-right font-serif sm:mt-[100px] md:mt-[60px] mr-5'>
            <p className='text-xs bold text-[#736c6c]'>Developed By</p>
            <Link to='https://teambitsec.com/'><p className='text-[#484646] sm:mb-2 md:mb-0'>Team Bitsec</p></Link>
            <p className='bold text-[#736c6c] sm:text-[13px] md:text-[16px]'>Copyright © 2024 Institute of Computer Science & Technology</p>
        </div>
    </div>
   </>
  )
}

export default Footer