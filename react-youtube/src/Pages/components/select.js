import React, { useState, useEffect } from "react";

export default function Selected({ newData, selectedData }) {
  return (
    <div>
      <select
        className="mb-3"
        onChange={(event) => selectedData(event.target.value)}
      >
        {" "}
        <option value="" default>
          Selected album
        </option>
        {Object.keys(newData).map((d, index) => {
          return (
            <option key={index} value={d}>
              {d === "1" ? "First album" : "Second album"}
            </option>
          );
        })}
      </select>
    </div>
  );
}
