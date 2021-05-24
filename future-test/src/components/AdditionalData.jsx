import React from "react";

function AdditionalData({ data }) {
  return (
    <div>
      Выбран пользователь{" "}
      <b>
        {data.firstName} {data.lastName}
      </b>
      Описание:
      <textarea value={data.description} readOnly></textarea>
      Адрес проживания: <b>{data.address.streetAddress}</b>
      Город: <b>{data.address.city}</b>
      Провинция/штат: <b>{data.address.state}</b>
      Индекс: <b>{data.address.zip}</b>
    </div>
  );
}

export default AdditionalData;
