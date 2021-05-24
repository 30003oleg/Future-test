import React from "react";

function AdditionalData({ data }) {
  return (
    <div className="moreData">
      <p>
        Выбран пользователь:{" "}
        <b>
          {data.firstName} {data.lastName}
        </b>
      </p>
      <p>Описание:</p>
      <textarea value={data.description} readOnly></textarea>
      <p>
        Адрес проживания: <b>{data.address.streetAddress}</b>
      </p>
      <p>
        Город: <b>{data.address.city}</b>
      </p>
      <p>
        Провинция/штат: <b>{data.address.state}</b>
      </p>
      <p>
        Индекс: <b>{data.address.zip}</b>
      </p>
    </div>
  );
}

export default AdditionalData;
