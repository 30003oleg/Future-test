import React from "react";
import "../css/modalForm.css";

function TableAddRow({ onAddNewRow }) {
  const [newRowData, setNewRowData] = React.useState({});
  const [isShown, setIsSwown] = React.useState(false);
  const [valid, setValid] = React.useState(false);

  const onChangeSave = (key, value) => {
    let obj = { ...newRowData };
    obj[key] = value;
    setNewRowData(obj);
  };

  React.useEffect(() => {
    console.log(new RegExp("[a-zA-Z]"));
    /*setValid(
        (newRowData['id'] ==  && b
    ); */
  }, [newRowData]);

  return (
    <div>
      <button id="myBtn" onClick={() => setIsSwown(true)}>
        Добавить поле
      </button>
      {isShown ? (
        <div className="modal">
          <div className="modal-content">
            <span
              className="close"
              onClick={() => {
                setIsSwown(false);
                setNewRowData({});
              }}
            >
              &times;
            </span>
            <input
              type="number"
              name="id"
              onChange={(e) => onChangeSave(e.target.name, e.target.value)}
            />
            <input
              type="text"
              name="firstName"
              onChange={(e) => onChangeSave(e.target.name, e.target.value)}
            />
            <input
              type="text"
              name="lastName"
              onChange={(e) => onChangeSave(e.target.name, e.target.value)}
            />
            <input
              type="email"
              name="email"
              onChange={(e) => onChangeSave(e.target.name, e.target.value)}
            />
            <input
              type="tel"
              name="phone"
              onChange={(e) => onChangeSave(e.target.name, e.target.value)}
            />
            <p>Some text in the Modal..</p>
            <button onClick={() => onAddNewRow(newRowData)}>
              Добавить в таблицу
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default TableAddRow;
