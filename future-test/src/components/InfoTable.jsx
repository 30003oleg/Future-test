import React from "react";
import TableHeader from "./TableHeader";
function InfoTable(props) {
  console.log(props.data[0] && Object.keys(props.data[0])); //
  return (
    <div className="infoTable">
      <div className="infoTable__search">
        <input type="text" placeholder="Search"></input>
      </div>
      <div className="infoTable__table">
        <table>
          <thead>
            <tr>
              <TableHeader
                title="Id"
                string="id"
                sortMethod={props.onSort}
              ></TableHeader>
              <TableHeader
                title="First Name"
                string="firstName"
                sortMethod={props.onSort}
              ></TableHeader>
              <TableHeader
                title="Last Name"
                string="lastName"
                sortMethod={props.onSort}
              ></TableHeader>
              <TableHeader
                title="E-mail"
                string="email"
                sortMethod={props.onSort}
              ></TableHeader>
              <TableHeader
                title="Phone"
                string="phone"
                sortMethod={props.onSort}
              ></TableHeader>
            </tr>
          </thead>
          <tbody>
            {props.data.map((item) => (
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
      <div className="infoTable__pag">
        <div className="infoTable__pag-left">н</div>
        <span className="infoTable__pag-page">1</span>
        <div className="infoTable__pag-right">в</div>
      </div>
    </div>
  );
}

export default InfoTable;
