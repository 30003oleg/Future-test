import React from "react";
import { TableHeader, TableSearch, TablePagination } from "./";
function InfoTable({
  onSearch,
  onSort,
  currentSort,
  data,
  currentPage,
  onChangePage,
}) {
  return (
    <div className="infoTable">
      <TableSearch onSearch={onSearch}></TableSearch>
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
            {data.map((item) => (
              //исправить key
              <tr key={item.id + item.phone}>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <TablePagination
        currentPage={currentPage}
        onChangePage={onChangePage}
      ></TablePagination>
    </div>
  );
}

export default InfoTable;
