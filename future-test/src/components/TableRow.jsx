import React from "react";

function TableRow({ item, showAdditionalData }) {
  return (
    <tr
      onClick={() => {
        showAdditionalData(item);
      }}
    >
      <td>{item.id}</td>
      <td>{item.firstName}</td>
      <td>{item.lastName}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
    </tr>
  );
}

export default TableRow;
