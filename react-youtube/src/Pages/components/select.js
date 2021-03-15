import React, { useState } from "react";

export default function Selected({ data }) {
  const [el, setEl] = useState([]);

  //   const newData = () => {
  //     let rez = Object.keys(data)
  //       .map((key) => ({ ...data[key] }))
  //       .reducer(
  //         (newArr, d) => (
  //           (newArr[d.category] = newArr[d.category] || []).push(d), newArr
  //         ),
  //         {}
  //       );
  //     setEl(rez);
  //   };

  return (
    <div>
      <pre>{data}</pre>
      <select>
        {
          // newData.map((d , index)=> {
          //     return  <option key={index} value={d.category}>{d.category}</option>
          // })
        }
      </select>
    </div>
  );
}
