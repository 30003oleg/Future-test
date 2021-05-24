import React from "react";

function DataChoose({ onFetch }) {
  const lessData = `http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`;
  const moreData = `http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`;
  return (
    <div className="dataChoose">
      <button
        onClick={() => {
          onFetch(lessData);
        }}
        className="dataChoose__button"
      >
        32 Строки
      </button>
      <button
        onClick={() => {
          onFetch(moreData);
        }}
        className="dataChoose__button"
      >
        1000 Строк
      </button>
    </div>
  );
}

export default DataChoose;
