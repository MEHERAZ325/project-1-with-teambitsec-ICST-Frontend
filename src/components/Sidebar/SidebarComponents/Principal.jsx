import React from 'react'
import Button from '../../Button/Button'
import Principal1 from '../../../images/slide/principal.jpg'

const Principal = () => {
  return (
    <div className='w-full h-[311px] mt-2'>
    <Button name='অধ্যক্ষ'/>
    <img className='mt-1' src={Principal1} alt="" />
    <div className='text-area mt-2 items-center justify-center text-center text-black'>
    <b><a className='font-medium' title='মো: আরিফ আল মাহমুদ' href="">মো: আরিফ আল মাহমুদ</a></b><br />
    <p className='font-bold text-gray-900'>অধ্যক্ষ</p>
    <p className='w-full text-gray-700 mt-1 font-serif text-xs'>ইনস্টিটিউট অব কম্পিউটার সায়েন্স এন্ড টেকনোলজি</p>
    </div>
 </div>
  )
}

export default Principal