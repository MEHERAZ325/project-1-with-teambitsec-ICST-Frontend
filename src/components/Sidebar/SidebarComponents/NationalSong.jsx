import React from 'react'
import Button from '../../Button/Button'

const NationalSong = () => {
  return (
    <div className='w-[220px] h-[125px] mt-5'>
    <Button name="জাতীয় সংগীত"/>
    <audio className='mt-3' controls style={{width:"100%"}}>
    <source src="./assets/files/audio/bd_national_anthem.mp3" type="audio/mp3"/>
    </audio>
   </div>
  )
}

export default NationalSong