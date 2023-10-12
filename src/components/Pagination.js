import ReactPaginate from "react-paginate";
import React, { useEffect, useState } from "react";
import "./Pagination.module.css";
import DisplayCards from "./DisplayCards";

function Items({ currentItems, isReady }) {
  return (
    <div className="items">
      <DisplayCards currentItems={currentItems} isReady={isReady} />
    </div>
  );
}

export function PaginatedItems({ itemsPerPage, cardsToDisplay, isReady }) {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(cardsToDisplay.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(cardsToDisplay.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, cardsToDisplay]);

  const HandlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % cardsToDisplay.length;
    setItemOffset(newOffset);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Items currentItems={currentItems} isReady={isReady} />
      {isReady && (
        <ReactPaginate
          nextLabel="next >"
          onPageChange={HandlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      )}
    </>
  );
}
