import React from 'react'
import RightArrow from '../../images/arrow/right-arrow.png'
import LeftArrow from '../../images/arrow/left-arrow.png'

const BtnSlider = ({direction, moveSlide}) => {
    console.log(direction, moveSlide)
  return (
   <div className='flex justify-between items-center'>
     <button
    onClick={moveSlide}
     className={direction === "next" ? 'bg-slate-500 text-black rounded-full h-8 w-8 next left-0' : 'bg-slate-500 text-black prev rounded-full h-8 w-8 right-0'}
    >
        <img className='bg-slate-500 w-9 flex justify-between rounded-full p-1' src={direction === "next" ? LeftArrow : RightArrow}  alt='lo'/>
    </button>
   </div>
  )
}

export default BtnSlider