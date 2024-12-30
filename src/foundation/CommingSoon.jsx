import React from 'react'
import Carousel from '../components/Slider/Carousel'
import Footer from '../components/Footer/Footer'

const CommingSoon = () => {
  return (
    <>
      <Carousel/>
      {/* navbar */}

      <div className='w-full justify-center sm:w-[330px] md:w-[720px] lg:w-[960px] max-w-[960px] mx-auto'>
        <h2 className='p-[30px] text-center text-3xl font-bold'>Page Coming Soon</h2>
        <div className='svg'>

        </div>
        <p className='text-center'>We're working hard to bring you this page. Stay tuned!</p>
      </div>
      
      <Footer/>
    </>
  )
}

export default CommingSoon