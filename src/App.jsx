import { useState } from "react"
import "./App.css"
import Home from "./components/Home"
import NoticeList from './NoticeList'
import { getUsers, getLength } from "./NoticeListData"
import Pagination from "./Pagination"

const App = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [search, setSearch] = useState('');

  let totalPage = Math.ceil(getLength() / limit);
  let pageNo;

  if (page<=totalPage){
    pageNo = page;
  }else{
    setPage(totalPage);
    pageNo = page;
  }

  function handlePageChange(value){
    if(value === "Previous" || value === "..."){
      if(page !== 1){
        setPage(page - 1);
      }
    }
   else if(value === "Next" || value === "..."){
      if(page !== 10){
        setPage(page + 1);
      }
    }
    else{
      setPage(value)
    }
  }
  return (
  <div className="container">
      {/* <Home /> */}
      <NoticeList  users={getUsers(page, limit)} search={search} setSearch={setSearch} onLimitChange={setLimit} totalPage={totalPage} page={pageNo} limit={limit} siblings={1} onPageChange={handlePageChange}  />
  </div>  
  )
}
          
export default App