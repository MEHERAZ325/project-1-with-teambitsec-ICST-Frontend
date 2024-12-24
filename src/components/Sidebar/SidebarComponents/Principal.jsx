import React from 'react'
import Button from '../../Button/Button'
import Principal1 from '../../../images/slide/principal.jpg'

const Principal = () => {
  return (
    <div className='w-full h-[311px] mt-2'>
    <Button name='অধ্যক্ষ'/>
    <img className='mt-1' src={Principal1} alt="" />
    <div className='text-area mt-2 items-center justify-center text-center text-black'>
    <b><a style={{fontSize:"14px", fontWeight:"bold"}} title='মো: আরিফ আল মাহমুদ' href="">মো: আরিফ আল মাহমুদ</a></b><br />
    <p style={{fontWeight:"500"}}>অধ্যক্ষ</p>
    <p style={{fontSize:"15px", width:"100%"}}>ইনস্টিটিউট অব কম্পিউটার সায়েন্স এন্ড টেকনোলজি</p>
    </div>
 </div>
  )
}

export default Principal