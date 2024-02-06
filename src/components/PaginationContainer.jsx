import React from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

function PaginationContainer() {
  const { meta } = useLoaderData();
  //console.log(meta);
  const { pageCount, page } = meta.pagination;
  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });

  const { search, pathname } = useLocation();
  const navigate = useNavigate();
  const handlePageChange = (pageNumber) => {
    //console.log(pageNumber);
    //console.log(search);
   // console.log(pathname);

    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
    window.scrollTo(0,0)
  };

  if (pageCount < 2) return null;

  return (
    <div className="mt-16 flex justify-center">
      <div className="join">
        <button
          className="join-item btn bg-slate-600 hover:bg-slate-800"
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) prevPage = pageCount;
            handlePageChange(prevPage);
          }}
        >
          «
        </button>
        <button className="join-item btn">{page}</button>
        <button
          className="join-item btn bg-slate-600 hover:bg-slate-800"
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) nextPage = 1;
            handlePageChange(nextPage);
          }}
        >
          »
        </button>
      </div>
    </div>
  );
}

export default PaginationContainer;
