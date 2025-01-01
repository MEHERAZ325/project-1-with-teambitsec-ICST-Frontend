import React from 'react'
import Carousel from '../components/Slider/Carousel'
import Footer from '../components/Footer/Footer'
import { Link } from 'react-router-dom'

const CommingSoon = () => {
  return (
    <>
      <Carousel/>
      {/* navbar */}

      <div className='w-full justify-center sm:w-[330px] md:w-[720px] lg:w-[960px] max-w-[960px] mx-auto'>
        <h2 className='p-[30px] text-center text-gray-900 text-3xl font-bold'>Page Coming Soon</h2>
        <div className='svg'>
          
        </div>
        <p className='text-center'>We're working hard to bring you this page. Stay tuned!</p>
        <div className='flex justify-center'>
        <button className='bg-gradient-to-r from-blue-400 to-blue-800  px-4 py-3 text-white text-bold text-center  rounded-lg shadow-md'><Link to='/'>Go Back</Link></button>
        </div>
      </div>
      
      <Footer/>
    </>
  )
}

export default CommingSoon