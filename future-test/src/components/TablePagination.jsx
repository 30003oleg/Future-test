import React from "react";

function TablePagination({ currentPage, onChangePage}) {
  return (
    <div className="infoTable__pag">
      <div className="infoTable__pag-left" onClick={() => onChangePage(false)}>
        н
      </div>
      <span className="infoTable__pag-page">{currentPage + 1}</span>
      <div className="infoTable__pag-right" onClick={() => onChangePage(true)}>
        в
      </div>
    </div>
  );
}

export default TablePagination;
