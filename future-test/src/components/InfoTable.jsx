import React from "react";
import {
  TableHeader,
  TableSearch,
  TablePagination,
  TableAddRow,
  TableRow,
  AdditionalData,
} from "./";

function InfoTable({
  onSearch,
  onSort,
  currentSort,
  data,
  currentPage,
  onChangePage,
  onAddNewRow,
}) {
  const [moreInfo, setMoreInfo] = React.useState(null);

  const showAdditionalData = (item) => {
    setMoreInfo(item);
  };

  return (
    <div className="infoTable">
      <div className="infoTable__top">
        <TableAddRow onAddNewRow={onAddNewRow}></TableAddRow>
        <TableSearch onSearch={onSearch}></TableSearch>
      </div>
      <div className="infoTable__table">
        <table>
          <thead>
            <tr>
              <TableHeader
                title="Id"
                dataKey="id"
                sortMethod={onSort}
                currentSort={currentSort}
              ></TableHeader>
              <TableHeader
                title="First Name"
                dataKey="firstName"
                sortMethod={onSort}
                currentSort={currentSort}
              ></TableHeader>
              <TableHeader
                title="Last Name"
                dataKey="lastName"
                sortMethod={onSort}
                currentSort={currentSort}
              ></TableHeader>
              <TableHeader
                title="E-mail"
                dataKey="email"
                sortMethod={onSort}
                currentSort={currentSort}
              ></TableHeader>
              <TableHeader
                title="Phone"
                dataKey="phone"
                sortMethod={onSort}
                currentSort={currentSort}
              ></TableHeader>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <TableRow
                key={index}
                item={item}
                showAdditionalData={showAdditionalData}
              />
            ))}
          </tbody>
        </table>
      </div>
      <TablePagination
        currentPage={currentPage}
        onChangePage={onChangePage}
      ></TablePagination>
      {moreInfo ? <AdditionalData data={moreInfo}></AdditionalData> : null}
    </div>
  );
}

export default InfoTable;
