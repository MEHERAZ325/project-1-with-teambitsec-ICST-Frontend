import React from 'react'
import Button from '../../Button/Button'

const NationalSong = () => {
  return (
    <div className='w-full h-[125px] sm:mt-[40px] md:mt-[-360px] md:ml-[350px] lg:mt-[60px] lg:ml-0'>
    <Button className='' name="জাতীয় সংগীত"/>
    <audio className='sm:ml-[40px] sm:mt-[40px] md:ml-[70px] md:mt-[20px] lg:ml-0' controls style={{width:"100%"}}>
    <source src="./assets/files/audio/bd_national_anthem.mp3" type="audio/mp3"/>
    </audio>
   </div>
  )
}

export default NationalSong