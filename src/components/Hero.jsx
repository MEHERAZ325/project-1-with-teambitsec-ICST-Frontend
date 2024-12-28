import React from 'react'
import Img from '../images/slide/image6.jpeg'
import Imgg1 from '../images/CardImgage/campus.png'
import Imgg2 from '../images/CardImgage/admission512x512.png'
import Imgg3 from '../images/CardImgage/scholarship.png'
import Imgg4 from '../images/CardImgage/academic_paper.png'
import Imgg5 from '../images/CardImgage/Examination_ex.png'
import Imgg6 from '../images/CardImgage/GPA-512.png'
import Imgg7 from '../images/CardImgage/resources-.png'
import Imgg8 from '../images/CardImgage/gallery-44-267592.png'
import Imgg9 from '../images/CardImgage/notice&download.png'
import Imgg10 from '../images/CardImgage/course-list.png'


import Button from './Button/Button'
import '../components/Hero.css'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar/Sidebar'
import Notice from './Notice/Notice'
import Card from './Cards/Card'
import VideoGallery from './VideoSection/VideoGallery'
import Footer from './Footer/Footer'

// this container class import from App.css
const Hero = () => {
  return (
    <div className='container w-[100%] flex order-1'>
        {/* start */}
       <div className='w-[720px] sm:[330px] mt-4 mr-3 relative'>
        <div className='w-full absolute shadow-xl'>
        <a href="#">
            <img src={Img} className='w-[720px] sm:w-full h-[380px]' alt="" />
        </a>
       <div className='sm:w-[310px] md:w-[720px] mt-5  h-[50px] bg-[#cbcccd] justify-center text-[#666666]'>
       <marquee style={{marginTop:"10px", fontSize:"20px", fontWeight: "bold"}} title='***৪ বছর মেয়াদী ডিপ্লোমা-ইন-ইঞ্জিনিয়ারিং কোর্সে ২৩  তম ব্যাচে সরকারি বৃত্তির সুবিধাসহ  ভর্তি চলছে |'  behavior="scroll" direction="left">
       ***৪ বছর মেয়াদী ডিপ্লোমা-ইন-ইঞ্জিনিয়ারিং কোর্সে ২৩  তম ব্যাচে সরকারি বৃত্তির সুবিধাসহ  ভর্তি চলছে |
        </marquee>
       </div>
        <Notice/>

        <div className='sm:mt-[-200px] w-full justify-center md:mt-[100px] gap-5 h-[156px] flex sm:flex-col md:flex-row'>
          <div className='w-[347px] h-full sm:grid sm:grid-cols-1'>
            <Card h4="ক্যাম্পাস"
            Image={Imgg1}
            link1={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>আমাদের সম্পর্কে</Link></li>}
            link2={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>ইতিহাস</Link></li>}
            link3={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>লক্ষ্য ও উদ্দেশ্য</Link></li>}
            link4={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>প্রাতিষ্ঠানিক কাঠামো</Link></li>}
            link5={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>প্রাতিষ্ঠানিক অবকাঠামো</Link></li>}
            />
          </div>

          <div className='w-[347px] h-full sm:grid-cols-1'>
          <Card h4="ভর্তি"
            Image={Imgg2}
            link1={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>কিভাবে আবেদন করতে হবে</Link></li>}
            link2={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>আবেদন</Link></li>}
            link3={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>ভর্তি পরীক্ষা</Link></li>}
            link4={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>ভর্তি নীতি</Link></li>}
            link5={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>বর্তমান শিক্ষা ব্যবস্থা</Link></li>}
            />
          </div>
        </div>
        {/* {row 1 end} */}

        <div className='w-full justify-center mt-5 gap-5 h-[156px] flex sm:flex-col md:flex-row'>
          <div className='w-[347px] h-full sm:grid-cols-1'>
            <Card h4="প্রশাসন"
            Image={Imgg3}
            link1={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>অধ্যক্ষ</Link></li>}
            link2={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>উপাধ্যক্ষ</Link></li>}
            link3={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>আমাদের শিক্ষক</Link></li>}
            link4={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>আমাদের কর্মচারী</Link></li>}
            link5={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>একাডেমিক কার্যক্রম</Link></li>}
            />
          </div>

          <div className='w-[347px] h-full sm:grid-cols-1 flex'>
          <Card h4="একাডেমিক কার্যক্রম"
            Image={Imgg4}
            link1={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>শ্রেণিসূচি</Link></li>}
            link2={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>অনলাইন শ্রেণিসূচি</Link></li>}
            link3={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>পরীক্ষার সময়সূচি</Link></li>}
            link4={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>একাডেমিক সিলেবাস</Link></li>}
            link5={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>শিক্ষা বর্ষপঞ্জি</Link></li>}
            />
          </div>
        </div>

        <div className='w-full justify-center mt-5 gap-5 h-[156px] flex sm:flex-col md:flex-row'>
          <div className='w-[347px] h-full sm:grid-cols-1'>
            <Card h4="শিক্ষার্থী"
            Image={Imgg5}
            link1={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>আইসিটি ক্লাব</Link></li>}
            link2={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>পরীক্ষা ব্যবস্থা</Link></li>}
            link3={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>নিয়ম এবং প্রবিধান</Link></li>}
            link4={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>আমাদের শিক্ষার্থী</Link></li>}
            link5={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>শিক্ষার্থীদের সাফল্যের গল্প</Link></li>}
            />
          </div>

          <div className='w-[347px] h-full sm:grid-cols-1'>
          <Card h4="ফলাফল"
            Image={Imgg6}
            link1={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>অভ্যন্তরীণ পরীক্ষার ফলাফল</Link></li>}
            link2={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>বোর্ড পরীক্ষার ফলাফল</Link></li>}
            />
          </div>
        </div>

        <div className='w-full justify-center mt-5 gap-5 h-[156px] flex sm:flex-col md:flex-row'>
          <div className='w-[347px] h-full sm:grid-cols-1'>
            <Card h4="রিসোর্স"
            Image={Imgg7}
            link1={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>ডিজিটাল ক্লাস কনটেন্ট</Link></li>}
            link2={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>গ্রন্থাগার</Link></li>}
            link3={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>কম্পিউটার ল্যাব</Link></li>}
            link4={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>খেলার মাঠ</Link></li>}
            link5={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>আইসিটি ক্লাব</Link></li>}
            />
          </div>

          <div className='w-[347px] h-full sm:grid-cols-1'>
          <Card h4="গ্যালারি"
            Image={Imgg8}
            link1={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>ছবি গ্যালারী</Link></li>}
            link2={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>ভিডিও গ্যালারী</Link></li>}
            />
          </div>
        </div>

        <div className='w-full justify-center mt-5 gap-5 h-[156px] flex sm:flex-col md:flex-row'>
          <div className='w-[347px] h-full sm:grid-cols-1'>
            <Card h4="নোটিশ"
            Image={Imgg9}
            link1={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>নোটিশ</Link></li>}
            link2={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>ডাউনলোড</Link></li>}
            link3={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>জব প্লেসমেন্ট</Link></li>}
            link4={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>ইভেন্টস</Link></li>}
            />
          </div>

          <div className='w-[347px] h-full sm:grid-cols-1'>
          <Card h4="টেকনোলজিসমূহ"
            Image={Imgg10}
            link1={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>কম্পিউটার সায়েন্স</Link></li>}
            link2={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>সিভিল</Link></li>}
            link3={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>টেক্সটাইল</Link></li>}
            link4={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>ইলেকট্রনিকস</Link></li>}
            link5={<li><i className=" text-green-900 fa-solid fa-angle-right mr-1"></i><Link className='text-[15px] hover:underline' to='/'>আর্কিটেকচার</Link></li>}
            />
          </div>
        </div>

       <div className='w-[100%]'>
       <VideoGallery/>
       </div>

       <div className='sm:w-[220px] lg:hidden'>
       <Sidebar/>
       </div>

       <div className='w-100% h-f'>
       <Footer/>
       </div>

        </div>
       </div>
       {/* end */}

       {/* Sidebar start */}
       <div className='mt-4 w-[220px] sm:hidden lg:block flex-col'>
       <Sidebar/>
       </div>
       {/* Sidebar end */}
  
    </div>
  )
}

export default Hero