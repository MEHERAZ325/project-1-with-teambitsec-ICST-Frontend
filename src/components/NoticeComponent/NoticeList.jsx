import React, { useState } from 'react'
// import pdfImg from '../../images/pdf/pdf'
import TopBlueRow from '../HeadersArea/TopBlueRow'
import Carousel from '../Slider/Carousel'
// import Pagination from './Pagination'
import Principal from '../../components/Sidebar/SidebarComponents/Principal'
import ICST from '../../components/Sidebar/ICST'
import ImportantLink from '../../components/Sidebar/SidebarComponents/ImportantLink'
import Footer from '../Footer/Footer'
import {getUsers, getLength} from '../data/NoticeListData'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'

const NoticeList = () => {
  const [page, setPage] = useState(3);
  const [limit, setLimit] = useState(5);
  const users = getUsers(page, limit);
  let totalPage = Math.ceil(getLength() / limit);
  let pageNo;
  if(page <= totalPage){
    pageNo = page;
  }else{
    setPage(totalPage);
    pageNo = page
  }

  function handlePageChange(value){
    if(value === "&laquo;" || value === "... ") {
      setPage(1);
    }else if(value === "&lsaquo;"){
      if(page !== 1){
        setPage(page - 1);
      }
    }else if(value === "&rsaquo;"){
      if(page !== totalPage) {
        setPage(page + 1);
      }
    }else if(value === "&raquo;" || value === " ..."){
      setPage(totalPage);
    }else{
      setPage(value);
    }
  }
  return (
    <div>
    <TopBlueRow />
    <Carousel/>
    <div className='w-full lg:flex sm:w-[330px] md:w-[720px] lg:w-[960px] max-w-[960px] mx-auto'>
      <div className='notice-area lg:w-[720px]'>
        <h3 className='text-center mt-[30px] mb-1 border-b border-gray-500'>সকল নোটিশ</h3>
        <div className='flex justify-between mt-[40px]'>
        <div>
          <label className='flex sm:mr-7'>
            <p className='mr-2'>Show</p>
            <select 
    onChange={(e) => setLimit(e.target.value)} 
    className="form-select block w-full sm:px-2 sm:py-0 md:px-8 md:py-0 lg:px-2 lg:py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mt-[-9px]" 
    aria-label="Default select example" 
    id=""
  >
    <option value="5">5</option>
    <option value="10">10</option>
    <option value="30">30</option>
  </select>
            <p className='ml-1'>entries</p>
          </label>
        </div>
        <div>
          <label className='flex sm:mr-7'>
            Search:
            <input className='b-1 border border-gray-600 outline-2 ml-2 rounded-md sm:w-[90px] md:w-full' type="text" />
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
          {users.map((user) => (
            <tr key={user.num}>
              <td className='text-center w-[46px] h-[42px] b-1 border border-gray-600'>{user.num}</td>
              <td className='text-center text-[13px] w-[421px] h-[42px] b-1 border border-gray-600'>{user.title}</td>
              <td className='text-center text-[13px] w-[132px] h-[42px] border border-gray-600'>{user.date}</td>
              <td className='text-center text-xs w-[75px] h-[42px] border border-gray-600'><Link to="/"><img className='ml-5' src={user.image} alt="" /></Link></td>
            </tr>
            ))}
          </tbody>
        </table>

        <Pagination totalPage={totalPage} page={pageNo} limit={limit} siblings={1} onPageChange={handlePageChange}/> 

        </div>
      </div>

      <div className=' md:[-40px] lg:mt-0 lg:ml-[20px] lg:w-[220px]'>
       <div className='sm:hidden md:block md:overflow-hidden lg:[220px]'>
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