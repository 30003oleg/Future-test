import React from "react";

function TableHeader({ title, dataKey, sortMethod, currentSort }) {
  
  return (
    <th onClick={sortMethod.bind(null, dataKey)}>
      {title} {dataKey == currentSort[1] ? (currentSort[0] ? "▲" : "▼") : ""}
    </th>
  );
}
//▲	вверх		&#9650;
//▼	вниз		&#9660;
export default TableHeader;
