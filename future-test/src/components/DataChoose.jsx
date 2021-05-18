import React from "react";

function DataChoose({ onClickLoad }) {
  const lessData = `http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`;
  const moreData = `http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`;
  return (
    <div className="dataChoose">
      <button
        onClick={() => {
          onClickLoad(lessData);
        }}
        className="dataChoose__button"
      >
        Малый
      </button>
      <button
        onClick={() => {
          onClickLoad(moreData);
        }}
        className="dataChoose__button"
      >
        Большой
      </button>
    </div>
  );
}

export default DataChoose;
