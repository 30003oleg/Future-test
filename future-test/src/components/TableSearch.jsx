import React from "react";

function TableSearch({ onSearch }) {
  const [searchSubstr, setSearchSubstr] = React.useState("");

  return (
    <div className="infoTable__search">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchSubstr(e.target.value)}
      ></input>
      <button onClick={onSearch.bind(null, searchSubstr)}>🔎</button>
    </div>
  );
}

export default TableSearch;
//&#128270;
