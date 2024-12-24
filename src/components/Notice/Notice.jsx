import React from 'react'
import './Notice.css'
import { Link } from 'react-router-dom'

const Notice = () => {
  return (
    <div className='relative'>
        <div className='bg-[#e6e7e8] md:w-[720px] sm:w-[330px] top-4 items-center justify-center absolute'>
        <h2 className='text-xl md:left-[350px] sm:left-[120px] absolute text-gray-600 font-bold'>নোটিশ  </h2>
        <hr className='w-full h-9 bg-[#e6e7e8] '/>
        <hr className='w-full'/>
        <div>
            <ul className='lists md:flex gap-3 sm:grid sm:grid-cols-1'>
                <li className='ml-1'><Link href="/">ডিপ্লোমা ইন টেক্সটাইল ইঞ্জিনিয়ারিং শিক্ষাক্রমের পরীক্ষার সময়সুচি-২০২২ <i>(০২-১২-২০২৪)</i></Link></li>
                <li><Link href="/">ডিপ্লোমা -ইন -ইঞ্জিনিয়ারিং শিক্ষাক্রমের ৪র্থ পর্বের ফরম ফিলাপ এর তারিখ সমূহ <i>(২১-১১-২০২৪)</i></Link></li>
                <li><Link href="/">ভর্তি চলছে (ICST) <i>(২১-১১-২০২৪)</i></Link></li>
                <li><Link href="/">উপবৃত্তি সংক্রান্ত নোটিশ <i>(২১-১১-২০২৪)</i></Link></li>
                <li className='mr-1'><Link href="/">ফরম ফিলাপ চলছে ২য়, ৪র্থ, ৬ষ্ঠ , ৮ম ও ৮ম অনিয়মিত পর্বের ফরম ফিলাপ এর তারিখ ১৭/১২/২০২২ইং তারিখ থেকে ২৪/১২/২০২২ইং তারিখ পর্যন্ত।<i>(২১-১১-২০২৪)</i></Link></li>
            </ul>
            <a className='socolNotice bg-[#e6e7e8] text-black p-3 right-0 mt-1 absolute' title='সকল নোটিশ' href="#">সকল নোটিশ</a>
            <div className='mt-[80px] bg-white'>
                <div className='bg-[#383e44] w-[100%] h-[50px]'>
                    <ul className=''>
                        {/* <marquee behavior="" direction=""></marquee> */} 
                        
                        {/* here we write marqueee text animation */}
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Notice