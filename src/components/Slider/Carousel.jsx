import React, { useEffect, useState } from 'react'
import './Carousel.css'
import sliderImg from '../ImageData.js'

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(null);
  let timeOut = null

  useEffect(() => {
   timeOut = autoPlay && setTimeout(() => {
      slideRight();
    }, 2500)
  })

  const slideRight = () => {
    setCurrent(current === sliderImg.length - 1 ? 0 : current + 1)
  }

  const slideLeft = () => {
    setCurrent(current === 0 ? sliderImg.length - 1 : current - 1)
  }
  return (

    <div onMouseEnter={() => {setAutoPlay(false); clearTimeout(timeOut)}} onMouseLeave={() => {setAutoPlay(true)}} className='carousel max-w-[960px] h-[333px] w-full mt-4 flex'>
      <div className='slide w-full h-full relative flex shadow-xl'>
        {
          sliderImg.map((images, index) => {
            return (
              <div className={index == current ? "carousel_card carousel_card-active" : "carousel_card"} key={index}>
                <img className='w-full h-full  ' src={images.image} alt="" />
              </div>
            )
          })}
          <div onClick={slideLeft} className="carousel_arrow_left">&lsaquo;</div>
          <div onClick={slideRight} className="carousel_arrow_right">&rsaquo;</div>
          <div className="carousel_pagination">
             {sliderImg.map((_, index) => {
              return(
                <div key={index} className={index == current ? "pagination_dot pagination_dot-active" : "pagination_dot"}
                onClick={() => setCurrent(index)}
                >

                </div>
              )
             })}
          </div>
      </div>
    </div>
  )
}

export default Carousel