import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import TopBlueRow from './components/HeadersArea/TopBlueRow'
import Carousel from './components/Slider/Carousel'
import Navber from './Nav/Navbar'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'
import Principal from './components/Sidebar/SidebarComponents/Principal'
import ICST from './components/Sidebar/ICST'
import ImportantLink from './components/Sidebar/SidebarComponents/ImportantLink'
import Footer from './components/Footer/Footer'

const NoticeList = ({users, search, setSearch, onLimitChange, totalPage, page, limit, siblings, onPageChange}) => {
  return (
    <div>
    <TopBlueRow />
    <Carousel/>
    <Navber/>
    <div className='sm:w-[330px] md:w-[100%] lg:flex'>
      <div className='notice-area md:w-[720px]'>
        <h3 className='text-center mt-[30px] mb-1 border-b border-gray-500'>সকল নোটিশ</h3>
        <div className='flex justify-between mt-[40px]'>
        <div>
          <label className='flex sm:mr-7'>
            <p className='mr-2'>Show</p>
            <select onChange={(e)=> onLimitChange(e.target.value)} className='mb-1 border border-gray-500 rounded-md' name="" id="">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
            <p className='ml-1'>entries</p>
          </label>
        </div>
        
        <div>
          <label className='flex sm:mr-7'>
            Search:
            <input onChange={(e) => setSearch(e.target.value)} className='b-1 border border-gray-600 outline-2 ml-2 rounded-md sm:w-[90px] md:w-full' type="text" />
          </label>
        </div>
        </div>
        <div className='mt-7'>
        <table className='w-full b-1 border border-gray-600'>
          <thead className='b-1 border border-gray-600'>
            <tr className=''>
              <td className='text-center text-xs w-[46px] h-[42px] b-1 border border-gray-600'>ক্রমিক</td>
              <td className='text-center text-xs w-[421px] h-[42px] b-1 border border-gray-600'>শিরোনাম</td>
              <td className='text-center text-xs w-[132px] h-[42px] b-1 border border-gray-600'>প্রকাশের তারিখ</td>
              <td className='text-center text-xs w-[75px] h-[42px]'>ডাউনলোড</td>
            </tr>
          </thead>
          <tbody className='b-1 border border-gray-600'>
            {users.filter((user) => {
              return search.toLowerCase() === '' ? user : user.title.toLowerCase().includes(search)
            }).map(user => (
            <tr key={user.num}>
              <td className='text-center text-xs w-[46px] h-[42px] b-1 border border-gray-600'>{user.num}</td>
              <td className='text-center text-[11px] w-[421px] h-[42px] b-1 border border-gray-600'>{user.title}</td>
              <td className='text-center text-xs w-[132px] h-[42px] border border-gray-600'>{user.date}</td>
              <td className='text-center text-xs w-[75px] h-[42px] border border-gray-600'><Link to="/"><img className='ml-5' src={user.image} alt="" /></Link></td>
            </tr>
            ))}
          </tbody>
        </table>
        <Pagination totalPage={totalPage} page={page} limit={limit} siblings={siblings} onPageChange={onPageChange} />
        </div>
      </div>
      <div className='sidebarArea md:[-40px] lg:mt-0 lg:ml-[20px]'>
       <div className='sm:hidden md:block md:overflow-hidden'>
       <Principal/>
        <ICST/>
        <ImportantLink/>
       </div>
      </div>
    </div>
      <Footer/>
    </div>
  )
}

export default NoticeList