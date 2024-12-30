import React from 'react'
import ImportantLink from './SidebarComponents/ImportantLink'
import Principal from './SidebarComponents/Principal'
import ICST from './ICST'
import NationalSong from './SidebarComponents/NationalSong'
import Hotline from './Hotline'
import MyGovt from './SidebarComponents/MyGovt'
import Gallery from './SidebarComponents/Gallery'
import Location from './SidebarComponents/Location'

const Sidebar = () => {
  return (
    <div className='mt-[-50px]'>
      <Principal/>
      <ICST/>
      <ImportantLink/>
      <NationalSong/>
      <Hotline/>
      <MyGovt/>
      <Gallery/>
      <Location/>
  </div>
  )
}

export default Sidebar