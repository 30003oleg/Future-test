import React from "react";
import "../css/modalForm.css";

function TableAddRow({ onAddNewRow }) {
  const [newRowData, setNewRowData] = React.useState({
    address: {
      streetAddress: " ",
      city: " ",
      state: " ",
      zip: " ",
    },
  });
  const [isShown, setIsSwown] = React.useState(false);
  const [valid, setValid] = React.useState(false);

  const onChangeSave = (key, value) => {
    let obj = { ...newRowData };
    obj[key] = value;
    setNewRowData(obj);
  };

  React.useEffect(() => {
    let regExpName = new RegExp(/^[a-zа-яё]+$/gi);
    let regExpId = new RegExp(/^\d+$/);
    let regExpEmail = new RegExp(/^[\w\d@.]+$/);
    let regPhone = new RegExp(/^[\d()+-]+$/);
    let a = regExpId.test(newRowData["id"]);
    let b = regExpName.test(newRowData["firstName"]);
    regExpName.lastIndex = 0;
    let c = regExpName.test(newRowData["lastName"]);
    let d = regExpEmail.test(newRowData["email"]);
    let e = regPhone.test(newRowData["phone"]);

    setValid(a && b && c && d && e);
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
                setNewRowData({
                  address: {
                    streetAddress: " ",
                    city: " ",
                    state: " ",
                    zip: " ",
                  },
                });
              }}
            >
              &times;
            </span>
            <label>{valid ? "" : "Проверьте правильность ввода!"}</label>
            <div className="modal__inputs">
              <input
                type="number"
                name="id"
                placeholder="Id"
                onChange={(e) => onChangeSave(e.target.name, e.target.value)}
              />

              <input
                type="text"
                name="firstName"
                placeholder="firstName"
                onChange={(e) => onChangeSave(e.target.name, e.target.value)}
              />

              <input
                type="text"
                name="lastName"
                placeholder="lastName"
                onChange={(e) => onChangeSave(e.target.name, e.target.value)}
              />

              <input
                type="email"
                name="email"
                placeholder="email"
                onChange={(e) => onChangeSave(e.target.name, e.target.value)}
              />

              <input
                type="tel"
                name="phone"
                placeholder="phone"
                onChange={(e) => onChangeSave(e.target.name, e.target.value)}
              />
            </div>

            <button onClick={() => onAddNewRow(newRowData)} disabled={!valid}>
              Добавить в таблицу
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default TableAddRow;
