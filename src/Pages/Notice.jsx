import React from 'react'
import TopBlueRow from '../components/HeadersArea/TopBlueRow'
import Carousel from '../components/Slider/Carousel'
import NoticeList from '../components/NoticeComponent/NoticeList'
import Footer from '../components/Footer/Footer'

const Notice = () => {
  return (
    <>
      <TopBlueRow/>
      <Carousel/>
      <NoticeList/>
      <Footer/>
    </>
  )
}

export default Notice