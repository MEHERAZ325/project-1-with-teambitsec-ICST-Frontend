import React from 'react'
import { returnPaginationRange } from './utils/appUtils'

const Pagination = (props) => {
   let array = returnPaginationRange(props.totalPage, props.page, props.limit, props.siblings)
  return (
        
    <ul className="flex sm:w-full overflow-hidden  justify-start space-x-2 mt-4 list-none">
  <button onClick={() => props.onPageChange('Previous')} className="px-4 py-2 border rounded bg-gray-300 hover:bg-gray-400">Previous</button>
 
  {array.map(value => {
     if(value === props.page){
        return (
            <li onClick={() => props.onPageChange(value)} key={value} className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">{value}</li>
        )
     } else{
        return (
            <li onClick={() => props.onPageChange(value)} key={value} className="px-4 py-2 border rounded hover:bg-gray-100">{value}</li>
        )
     }
  })}
  <li onClick={() => props.onPageChange('Next')} className="px-4 py-2 border rounded bg-gray-300 hover:bg-gray-400">Next</li>
</ul>
  )
}

export default Pagination