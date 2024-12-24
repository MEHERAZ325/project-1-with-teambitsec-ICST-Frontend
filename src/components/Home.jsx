import React from 'react'
import TopBlueRow from "../components/HeadersArea/TopBlueRow"
import Carousel from './Slider/Carousel'
import Navber from '../Nav/Navbar'
import Hero from './Hero'

const Home = () => {
  return (
    <div>
    <TopBlueRow />
    <Carousel/>
    <Navber/>
    <Hero/>
    </div>
  )
}

export default Home