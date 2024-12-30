import React from 'react'
import './Notice.css'
import { Link } from 'react-router-dom'

const Notice = () => {
  return (
    <div className='relative w-[720px] h-[266px] sm:h-[350px] sm:w-[328px]  mt-9 bg-gradient-to-r from-gray-300 to-lightgray'>
        <div className='md:w-[600px] sm:w-[330px] sm:p-4 top-4 left-[90px] items-center justify-center md:absolute'>
        <h2 className='mt-2 mb-5 text-[21px]'>নোটিশ</h2>
            <ul className=''>
                <li className='text-[13px] mb-1'><i className="fa-solid fa-caret-right text-green-500 mt-1 mr-2"></i><Link title='ডিপ্লোমা ইন টেক্সটাইল ইঞ্জিনিয়ারিং শিক্ষাক্রমের পরীক্ষার সময়সুচি-২০২২ (০২-১২-২০২৪)' className='border-b border-black border-dotted hover:border-solid' to="/">ডিপ্লোমা ইন টেক্সটাইল ইঞ্জিনিয়ারিং শিক্ষাক্রমের পরীক্ষার সময়সুচি-২০২২ <i className='text-gray-700'>(০২-১২-২০২৪)</i></Link></li>
                <li className='text-[13px] mb-1'><i className="fa-solid fa-caret-right text-green-500 mt-1 mr-2"></i><Link title='ডিপ্লোমা -ইন -ইঞ্জিনিয়ারিং শিক্ষাক্রমের ৪র্থ পর্বের ফরম ফিলাপ এর তারিখ সমূহ (২১-১১-২০২৪)' className='border-b border-black border-dotted hover:border-solid' to="/">ডিপ্লোমা -ইন -ইঞ্জিনিয়ারিং শিক্ষাক্রমের ৪র্থ পর্বের ফরম ফিলাপ এর তারিখ সমূহ <i className='text-gray-700'>(২১-১১-২০২৪)</i></Link></li>
                <li className='text-[13px] mb-1'><i className="fa-solid fa-caret-right text-green-500 mt-1 mr-2"></i><Link title='ভর্তি চলছে (ICST) (২১-১১-২০২৪)' className='border-b border-black border-dotted hover:border-solid' to="/">ভর্তি চলছে (ICST) <i className='text-gray-700'>(২১-১১-২০২৪)</i></Link></li>
                <li className='text-[13px] mb-1 '><i className="fa-solid fa-caret-right text-green-500 mt-1 mr-2"></i><Link title='উপবৃত্তি সংক্রান্ত নোটিশ (২১-১১-২০২৪)' className='border-b border-black border-dotted hover:border-solid' to="/">উপবৃত্তি সংক্রান্ত নোটিশ <i className='text-gray-700'>(২১-১১-২০২৪)</i></Link></li>
                <li className='text-[13px] mb-1 '><i className="fa-solid fa-caret-right text-green-500 mt-1 mr-2"></i><Link title='ফরম ফিলাপ চলছে ২য়, ৪র্থ, ৬ষ্ঠ , ৮ম ও ৮ম অনিয়মিত পর্বের ফরম ফিলাপ এর তারিখ ১৭/১২/২০২২ইং তারিখ থেকে ২৪/১২/২০২২ইং তারিখ পর্যন্ত।(২১-১১-২০২৪)' className='border-b border-black border-dotted hover:border-solid' to="/">ফরম ফিলাপ চলছে ২য়, ৪র্থ, ৬ষ্ঠ , ৮ম ও ৮ম অনিয়মিত পর্বের ফরম ফিলাপ এর তারিখ ১৭/১২/২০২২ইং তারিখ থেকে ২৪/১২/২০২২ইং তারিখ পর্যন্ত।<i className='text-gray-700'>(২১-১১-২০২৪)</i></Link></li>
            <Link className='socolNotice bg-[#d6dadf] hover:bg-[#848284] text-center sm:mr-5 text-black p-3 right-0 mt-1 text-sm absolute' title='সকল নোটিশ' to="/notice">সকল নোটিশ</Link>
            </ul>
    </div>
    </div>
  )
}

export default Notice