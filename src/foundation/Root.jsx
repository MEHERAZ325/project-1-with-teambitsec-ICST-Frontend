import React from 'react'
import TopBlueRow from '../components/HeadersArea/TopBlueRow'
import Carousel from '../components/Slider/Carousel'
import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'

const Root = () => {
  return (
    <>
    {/* <Header/> */}
    <Outlet/>
    {/* <Footer/> */}

    </>
  )
}

export default Root