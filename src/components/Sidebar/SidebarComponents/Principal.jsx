import React from 'react'
import Button from '../../Button/Button'
import Principal1 from '../../../images/slide/principal.jpg'

const Principal = () => {
  return (
    <div className='sm:w-full relative h-[311px] sm:mt-[100px] md:mt-[50px] md:w-[220px]'>
    <Button name='অধ্যক্ষ'/>
    <div className='justify-center sm:left-[80px] md:left-[50px] sm:mt-0 lg:left-0 sm:absolute md:relative'>
    <img className='mt-1 md:ml-4 lg:ml-0 lg:w-[220px]' src={Principal1} alt="" />
    <div className='text-area mt-2 items-center justify-center text-center text-black'>
    <b><a className='font-medium sm:left-5' title='মো: আরিফ আল মাহমুদ' href="">মো: আরিফ আল মাহমুদ</a></b><br />
    <p className='font-bold text-gray-900'>অধ্যক্ষ</p>
    <p className='w-full text-gray-700 mt-1 font-serif text-xs'>ইনস্টিটিউট অব কম্পিউটার সায়েন্স এন্ড টেকনোলজি</p>
    </div>
    </div>
 </div>
  )
}

export default Principal