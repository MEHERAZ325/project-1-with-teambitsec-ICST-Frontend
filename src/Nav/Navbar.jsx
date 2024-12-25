import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  
  return (
    <div className='navber sticky sm:mb-2 sm:bg-sky-200 shadow-2xl mt-4'>
        <FaBars style={{color:"gray"}} title='মেনু নির্বাচন করুন' className='relative right-0 text-purple-50 text-2xl  lg:hidden cursor-pointer'/>
      <ul className='  relative sm:hidden lg:block'>
        <li className='group text-[#ffa518] bg-white hover:bg-[#ffa518] hover:text-white duration-200 ease-linear'><Link to="/">ক্যাম্পাস</Link>
        <ul className='absolute hidden group-hover:block z-1 top-[26px] left-[-50px] w-[300px] flex-col'>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-[#ffa518] hover:text-white duration-200 ease-linear'><a href="22">আমাদের সম্পর্কে</a></li>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-[#ffa518] hover:text-white duration-200 ease-linear'><a href="22">ইতিহাস</a></li>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-[#ffa518] hover:text-white duration-200 ease-linear'><a href="22">লক্ষ্য ও উদ্দেশ্য</a></li>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-[#ffa518] hover:text-white duration-200 ease-linear'><a href="22">প্রাতিষ্ঠানিক কাঠামো</a></li>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-[#ffa518] hover:text-white duration-200 ease-linear'><a href="22">প্রাতিষ্ঠানিক অবকাঠামো</a></li>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-[#ffa518] hover:text-white duration-200 ease-linear'><a href="22">শুদ্ধাচার সংক্রান্ত তথ্য</a></li>
        </ul>
        </li>
        <li className='group text-[#686318] bg-white hover:bg-[#686318] hover:text-white duration-200 ease-linear'><Link href="/">ভর্তি</Link>
        <ul className='absolute hidden group-hover:block z-1 top-[26px] left-[-50px] w-[300px] flex-col'>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-[#686318] hover:text-white duration-200 ease-linear'><a href="22">কিভাবে আবেদন করতে হবে</a></li>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-[#686318] hover:text-white duration-200 ease-linear'><a href="22">আবেদন</a></li>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-[#686318] hover:text-white duration-200 ease-linear'><a href="22">ভর্তি পরীক্ষা</a></li>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-[#686318] hover:text-white duration-200 ease-linear'><a href="22">ভর্তি নীতি</a></li>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-[#686318] hover:text-white duration-200 ease-linear'><a href="22">বর্তমান শিক্ষা ব্যবস্থা</a></li>
        </ul>
        </li>
        <li className='group text-[#84154d] bg-white hover:bg-[#84154d] hover:text-white duration-200 ease-linear'><Link href="/">টেকনোলজিসমূহ </Link>
        <ul className='absolute hidden group-hover:block top-[26px] left-[-50px] w-[300px] flex-col'>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-[#84154d] hover:text-white duration-200 ease-linear'><a href="22">কম্পিউটার সায়েন্স</a></li>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-[#84154d] hover:text-white duration-200 ease-linear'><a href="22">ইলেকট্রিক্যাল </a></li>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-[#84154d] hover:text-white duration-200 ease-linear'><a href="22">সিভিল </a></li>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-[#84154d] hover:text-white duration-200 ease-linear'><a href="22">আর্কিটেকচার </a></li>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-[#84154d] hover:text-white duration-200 ease-linear'><a href="22">টেক্সটাইল </a></li>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-[#84154d] hover:text-white duration-200 ease-linear'><a href="22">গার্মেন্টস  </a></li>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-[#84154d] hover:text-white duration-200 ease-linear'><a href="22">ইলেকট্রনিকস  </a></li>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-[#84154d] hover:text-white duration-200 ease-linear'><a href="22">বিজনেস ম্যানেজমেন্ট এন্ড টেকনোলজি(HSC BMT)  </a></li>
        </ul>
        </li>
        <li  className='group text-green-800 bg-white hover:bg-green-800 hover:text-white duration-200 ease-linear'><Link href="/">প্রশাসন</Link>
        <ul className='absolute hidden group-hover:block top-[26px] left-[-50px] w-[300px] flex-col'>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-green-800 hover:text-white duration-200 ease-linear'><a href="22">অধ্যক্ষ</a></li>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-green-800 hover:text-white duration-200 ease-linear'><a href="22">উপাধ্যক্ষ</a></li>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-green-800 hover:text-white duration-200 ease-linear'><a href="22">উপাধ্যক্ষগণের নাম</a></li>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-green-800 hover:text-white duration-200 ease-linear'><a href="22">একাডেমিক কাউন্সিল</a></li>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-green-800 hover:text-white duration-200 ease-linear'><a href="22">শিক্ষক সংসদ</a></li>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-green-800 hover:text-white duration-200 ease-linear'><a href="22">আমাদের শিক্ষক</a></li>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-green-800 hover:text-white duration-200 ease-linear'><a href="22">আমাদের কর্মচারী</a></li>
        </ul>
        </li>
        <li className='group text-blue-600 bg-white hover:bg-blue-600 hover:text-white duration-200 ease-linear'><Link href="/">একাডেমিক কার্যক্রম</Link>
        <ul className='absolute hidden group-hover:block top-[26px] left-[-50px] w-[300px] flex-col'>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-blue-600 hover:text-white duration-200 ease-linear'><a href="22">শ্রেণিসূচি</a></li>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-blue-600 hover:text-white duration-200 ease-linear'><a href="22">অনলাইন শ্রেণিসূচি</a></li>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-blue-600 hover:text-white duration-200 ease-linear'><a href="22">পরীক্ষার সময়সূচি</a></li>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-blue-600 hover:text-white duration-200 ease-linear'><a href="22">একাডেমিক সিলেবাস</a></li>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-blue-600 hover:text-white duration-200 ease-linear'><a href="22">শিক্ষা বর্ষপঞ্জি</a></li>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-blue-600 hover:text-white duration-200 ease-linear'><a href="22">একাডেমিক প্রসপেক্টর</a></li>
        </ul>
        </li>
        <li className='group text-[#694bba] bg-white hover:bg-[#694bba] hover:text-white duration-200 ease-linear'><Link href="/">শিক্ষার্থী</Link>
        <ul className='absolute hidden group-hover:block top-[26px] left-[-50px] w-[300px] flex-col'>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-[#694bba] hover:text-white duration-200 ease-linear'><a href="22">শিক্ষার্থী ইউনিফর্ম</a></li>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-[#694bba] hover:text-white duration-200 ease-linear'><a href="22">পরীক্ষা ব্যবস্থা</a></li>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-[#694bba] hover:text-white duration-200 ease-linear'><a href="22">নিয়ম এবং প্রবিধান</a></li>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-[#694bba] hover:text-white duration-200 ease-linear'><a href="22">আমাদের শিক্ষার্থী</a></li>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-[#694bba] hover:text-white duration-200 ease-linear'><a href="22">শিক্ষার্থীদের সাফল্যের গল্প</a></li>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-[#694bba] hover:text-white duration-200 ease-linear'><a href="22">উদ্ধাবনী প্রকল্প</a></li>
        </ul>
        </li>
        <li className='group text-[#c40a2a] bg-white hover:bg-[#c40a2a] hover:text-white duration-200 ease-linear'><Link href="/">ফলাফল</Link>
        <ul className='absolute hidden group-hover:block top-[26px] left-[-50px] w-[300px] flex-col'>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-[#c40a2a] hover:text-white duration-200 ease-linear'><a href="22">অভ্যন্তরীণ পরীক্ষার ফলাফল</a></li>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-[#c40a2a] hover:text-white duration-200 ease-linear'><a href="22">বোর্ড পরীক্ষার ফলাফল</a></li>
        </ul>
        </li>
        <li className='group text-green-600 bg-white hover:bg-green-600 hover:text-white duration-200 ease-linear'><Link href="/">রিসোর্স</Link>
        <ul className='absolute hidden group-hover:block top-[26px] left-[-50px] w-[300px] flex-col'>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-green-600 hover:text-white duration-200 ease-linear'><a href="22">ডিজিটাল ক্লাস কনটেন্ট</a></li>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-green-600 hover:text-white duration-200 ease-linear'><a href="22">গ্রন্থাগার</a></li>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-green-600 hover:text-white duration-200 ease-linear'><a href="22">কম্পিউটার ল্যাব</a></li>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-green-600 hover:text-white duration-200 ease-linear'><a href="22">খেলার মাঠ</a></li>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-green-600 hover:text-white duration-200 ease-linear'><a href="22">আইসিটি ক্লাব</a></li>
        </ul>
        </li>
        <li className='group text-[#84154d] bg-white hover:bg-[#84154d] hover:text-white duration-200 ease-linear'><Link href="/">গ্যালারি</Link>
        <ul className='absolute hidden group-hover:block top-[26px] left-[-50px] w-[300px] flex-col'>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-[#84154d] hover:text-white duration-200 ease-linear'><a href="22">ছবি গ্যালারী</a></li>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-[#84154d] hover:text-white duration-200 ease-linear'><a href="22">ভিডিও গ্যালারী</a></li>
        </ul>
        </li>
        <li className='group text-[#0e91e7] bg-white hover:bg-[#0e91e7] hover:text-white duration-200 ease-linear'><Link href="/">নোটিশ কর্নার</Link>
        <ul className='absolute hidden group-hover:block top-[26px] left-[-50px] w-[300px] flex-col'>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-[#0e91e7] hover:text-white duration-200 ease-linear'><a href="22">সকল নোটিশ</a></li>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-[#0e91e7] hover:text-white duration-200 ease-linear'><a href="22">সকল অ্যাসাইনমেন্ট</a></li>
        </ul>
        </li>
        <li className='group text-[#c40a2a] bg-white hover:bg-[#c40a2a] hover:text-white duration-200 ease-linear'><Link href="/">ই-সেবা</Link>
        <ul className='absolute hidden group-hover:block top-[26px] left-[-50px] w-[300px] flex-col'>
          <li className='text-white bg-gray-800 w-[80%] hover:bg-[#c40a2a] hover:text-white duration-200 ease-linear'><a href="22">রোল/ আইডি </a></li>
        </ul>
        </li>
      </ul>
    </div>
  )
}

export default Navbar