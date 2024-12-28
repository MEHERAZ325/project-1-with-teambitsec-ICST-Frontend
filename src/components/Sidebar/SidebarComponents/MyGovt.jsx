import React from 'react'
import Button from '../../Button/Button'
import GovtImg from '../../../images/slide/my_gov.png'

const MyGovt = () => {
  return (
    <div className='w-[220px] h-[180px] mt-[200px]'>
       <Button name="আমার সরকার"/>
       <div className='w-[140px] h-[110px]'>
       <a href="https://www.mygov.bd/">
        <img className="w-[180px] sm:ml-[80px] md:ml-[120px] mr-[40px] mt-5 lg:ml-8" src={GovtImg} alt="" />
       </a>
       </div>
  </div>
  )
}

export default MyGovt