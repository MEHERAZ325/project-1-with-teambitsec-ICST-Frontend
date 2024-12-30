import React from 'react'
import TopBlueRow from '../HeadersArea/TopBlueRow'
import Carousel from '../Slider/Carousel'
import Navbar from '../Nav/Navbar'

const Header = () => {
  return (
    <div className=''>
        <TopBlueRow/>
        <Carousel/>
        {/* <Navbar/> */}
    </div>
  )
}

export default Header