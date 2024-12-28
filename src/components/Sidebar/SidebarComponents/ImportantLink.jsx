import React from 'react'
import Button from '../../Button/Button'
import { Link } from 'react-router-dom'

const ImportantLink = () => {
  return (
    <div className='sm:w-[220px] md:w-[300px] lg:w-[220px] h-[452px] mt-4'>
    <Button name='গুরুত্বপূর্ণ লিঙ্ক'/>
    <ul className='links mt-2'>
      
       <li className='text-[15px] p-[10px] mt-[3px] border-b border-solid pb-2'><i className="fa fa-check bg-green-600 text-white rounded-full text-[8px] mr-3 p-[5px]" aria-hidden="true"></i><Link className='text-[#a6a6a6] hover:underline hover:text-black text-center text-xs' title='কারিগরি শিক্ষা অধিদপ্তর ' to="https://techedu.gov.bd/"> কারিগরি শিক্ষা অধিদপ্তর 
       </Link></li>
       <li className='text-[15px] p-[10px] mt-[3px] border-b border-solid pb-2'><i className="fa fa-check bg-green-600 text-white rounded-full text-[8px] mr-3 p-[5px]" aria-hidden="true"></i><Link className='text-[#a6a6a6] hover:underline hover:text-black text-center text-xs' title='টেকনিক্যাল স্কুল ও কলেজসমূহ' to="https://techedu.gov.bd/"> টেকনিক্যাল স্কুল ও কলেজসমূহ 
       </Link></li>
       <li className='text-[15px] p-[10px] mt-[3px] border-b border-solid pb-2'><i className="fa fa-check bg-green-600 text-white rounded-full text-[8px] mr-3 p-[5px]" aria-hidden="true"></i><Link className='text-[#a6a6a6] hover:underline hover:text-black text-center text-xs' title='তথ্য প্রাপ্তির জন্য যোগাযোগ' to="#"> তথ্য প্রাপ্তির জন্য যোগাযোগ 
       </Link></li>
       <li className='text-[15px] p-[10px] mt-[3px] border-b border-solid pb-2'><i className="fa fa-check bg-green-600 text-white rounded-full text-[8px] mr-3 p-[5px]" aria-hidden="true"></i><Link className='text-[#a6a6a6] hover:underline hover:text-black text-center text-xs' title='NTVQF ওয়েবসাইট ' to="#"> NTVQF ওয়েবসাইট 
       </Link></li>
       <li className='text-[15px] p-[10px] mt-[3px] border-b border-solid pb-2'><i className="fa fa-check bg-green-600 text-white rounded-full text-[8px] mr-3 p-[5px]" aria-hidden="true"></i><Link className='text-[#a6a6a6] hover:underline hover:text-black text-center text-xs' title='মাধ্যমিক ও উচ্চ শিক্ষা বিভাগ' to="#"> মাধ্যমিক ও উচ্চ শিক্ষা বিভাগ 
       </Link></li>
       <li className='text-[15px] p-[10px] mt-[3px] border-b border-solid pb-2'><i className="fa fa-check bg-green-600 text-white rounded-full text-[8px] mr-3 p-[5px]" aria-hidden="true"></i><Link className='text-[#a6a6a6] hover:underline hover:text-black text-center text-xs' title='স্বল্পমেয়াদী কোর্স প্রতিষ্ঠানসমূহ' to="#"> স্বল্পমেয়াদী কোর্স প্রতিষ্ঠানসমূহ 
       </Link></li>
       <li className='text-[15px] p-[10px] mt-[3px] border-b border-solid pb-2'><i className="fa fa-check bg-green-600 text-white rounded-full text-[8px] mr-3 p-[5px]" aria-hidden="true"></i><Link className='text-[#a6a6a6] hover:underline hover:text-black text-center text-xs' title='প্রধানমন্ত্রীর শিক্ষা সহায়তা ট্রাস্ট' to="/"> প্রধানমন্ত্রীর শিক্ষা সহায়তা ট্রাস্ট 
       </Link></li>
       <li className='text-[15px] p-[10px] mt-[3px] border-b border-solid pb-2'><i className="fa fa-check bg-green-600 text-white rounded-full text-[8px] mr-3 p-[5px]" aria-hidden="true"></i><Link className='text-[#a6a6a6] hover:underline hover:text-black text-center text-xs' title='প্রধানমন্ত্রীর কার্যালয়' to="#"> প্রধানমন্ত্রীর কার্যালয় 
       </Link></li>
       <li className='text-[15px] p-[10px] mt-[3px] border-b border-solid pb-2'><i className="fa fa-check bg-green-600 text-white rounded-full text-[8px] mr-3 p-[5px]" aria-hidden="true"></i><Link className='text-[#a6a6a6] hover:underline hover:text-black text-center text-xs' title='মন্ত্রিপরিষদ বিভাগ' to="#"> মন্ত্রিপরিষদ বিভাগ 
       </Link></li>
    </ul>
  </div>
  )
}

export default ImportantLink