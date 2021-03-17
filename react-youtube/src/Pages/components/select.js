import React, { useState, useEffect } from "react";

export default function Selected({ data }) {
  const [newData, setNewData] = useState([]);
  useEffect(() => {
    let rez = data.reducer(
      (arr, el) => ((arr[el.albumId] = arr[el.albumId] || []).push(el), arr),
      {}
    );
    setNewData(rez);
  }, [data]);

  return (
    <div>
      <pre>{JSON.stringify(newData, null, 2)}</pre>

      {/* <select>
        {data.map((d, index) => {
          return (
            <option key={index} value={d.albumId}>
              {d.albumId}
            </option>
          );
        })}
      </select> */}
    </div>
  );
}
