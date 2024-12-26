import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = (props) => {
  return (
    <div className='w-[347px] sm:mt-[290px] md:mt-[50px] flex items-center justify-center gap-3  h-[156px] bg-[#f5f5f5]'>
       <div>
       <h4 className='text-gray-700 font-serif text-center'>{props.h4}</h4>
       <img className='w-[100px] h-[100px]' src={props.Image} alt="" />
       </div>
       <div>
        <ul className='block'>
         
          {props.link1}
          {/* ------- */}
          
          {props.link2}
          {/* -------- */}
          
          {props.link3}
          {/* -------- */}
          
          {props.link4}
          {/* -------- */}
         
          {props.link5}
          {/* -------- */}

          {props.link6}
        </ul>
       </div>
    </div>
  )
}

export default Card