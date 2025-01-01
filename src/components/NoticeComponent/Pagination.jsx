import React from 'react'
import { returnPaginationRange } from '../../utils/appUtils'

const Pagination = (props) => {
   let array = returnPaginationRange(props.totalPage, props.page, props.limit, props.siblings);
  return (
    <ul className="flex justify-end space-x-2 mt-3 text-sm">
    <li>
      <button onClick={() => props.onPageChange("&laquo;")} className="px-4 py-1 text-[30px] border border-gray-300 bg-gray-100 rounded-lg hover:bg-gray-300">&laquo;</button>
    </li>
    <li>
      <button onClick={() => props.onPageChange("&lsaquo;")} className="px-4 py-1 border text-[30px]  border-gray-300 bg-gray-100 rounded-lg hover:bg-gray-300">&lsaquo;</button>
    </li>
    {array.map((value) => {
      if(value === props.page){
        return(
            <li key={value}><button onClick={() => props.onPageChange(value)} className="page-item bg-blue-500 text-white font-medium px-4 py-2 rounded-md focus:outline-none active:bg-blue-700">{value}</button></li>
        )
      } else{
        return (
            <li key={value}><button onClick={() => props.onPageChange(value)} className="px-4 py-1 border border-gray-300 bg-gray-100 rounded-lg hover:bg-gray-300">{value}</button></li>
        )
      }
})}
    <li>
      <button onClick={() => props.onPageChange("&rsaquo;")} className="px-4 py-1 text-[30px]  border border-gray-300 bg-gray-100 rounded-lg hover:bg-gray-300">&rsaquo;</button>
    </li>
    <li>
      <button onClick={() => props.onPageChange("&raquo;")} className="px-4 py-1 text-[30px]  border border-gray-300 rounded-lg hover:bg-gray-300">&raquo;</button>
    </li>
  </ul>
  )
}

export default Pagination