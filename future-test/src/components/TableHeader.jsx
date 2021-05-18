import React from "react";

function TableHeader({ title, string, sortMetod }) {
  return <th onClick={sortMetod.bind(null, string)}>{title}</th>;
}

export default TableHeader;
