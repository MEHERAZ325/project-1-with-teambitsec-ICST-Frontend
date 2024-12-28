import React from 'react'

const Button = ({name}) => {
  return (
    <div className='sm:w-[310px] sm:h-[34px] md:w-[369px] lg:w-[220px] lg:h-[34px] pt-[5px] pr-[20px] pl-[5px] pb-[20px] text-center text-white bg-[#0e91e7]'>{name}</div>
  )
}

export default Button