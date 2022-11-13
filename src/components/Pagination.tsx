import { useState } from "react";

function Pagination({jobsLen, jobsPerPage, handleClick, currentPage}:{jobsLen: number, jobsPerPage: number, handleClick: React.MouseEventHandler, currentPage: number} ) {
  let totalPages = Math.ceil(jobsLen/jobsPerPage);

  function getPagesList(pagesCount: number) {
    let list = [];

     for (let i = 1; i <= totalPages; i++) {
        list.push(i);
     }
     return list;
  }
const pagesList: Array<number> =  getPagesList(totalPages);

  
return (
  <>
  <ul className="flex flex-row">{pagesList.map((page, index) => <li className={`py-3 px-4	 font-bold text-xl text-grey-fill ${(currentPage == page) ? "border-b-bright-blue border-b-2  text-bright-blue" : ""}`}  onClick={handleClick}  key={index}>{page}</li>)}</ul>
  </>
)


}
export default Pagination;