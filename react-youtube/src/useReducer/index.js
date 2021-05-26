import React, { useState, useReducer } from "react";

function init(startState) {
  return { count: startState };
}

function reducer(state, action) {
  switch (action.type) {
    case "plus":
      return { count: state.count + 2 };
    case "minus":
      return { count: state.count - 2 };
    case "reset":
      return init(action.payload);
    default:
      throw new Error();
  }
}

export default function TestUse({ startState }) {
  const [arr, setArr] = useState([
    { name: "Alex", age: 20 },
    { name: "Tom", age: 25 },
    { name: "Sem", age: 35 },
  ]);

    const [val] = useState("");
    const [test, seTest] = useState('')

  function deleteElement(indexid) {
    setArr(arr.filter((el, index) => index !== indexid));
  }

    function updateData(e, indexEl) {
        const data = e.target.value;
       
            seTest(data);
      
     
        // setArr(prevarr => ({
        //     arr: prevarr.arr.filter((el, index) => index === indexEl && console.log('Success') )  
        // })) 
  }

  const [state, dispatch] = useReducer(reducer, startState, init);

  return (
    <div>
          <p>{state.count}</p>
          <p>{test }</p>
      <ul>
        {arr.map((el, index) => {
          return (
            <li key={index}>
                  {el.name} - {el.age}
              <input
                type="text"
                value={val}
                onChange={(event) => updateData(event, index)}
              />
              <button onClick={() => deleteElement(index)}>Delete</button>
            </li>
          );
        })}
      </ul>
      <button onClick={() => dispatch({ type: "plus" })}>+</button>
      <button onClick={() => dispatch({ type: "minus" })}>-</button>
      <button onClick={() => dispatch({ type: "reset", payload: startState })}>
        Reset
      </button>
    </div>
  );
}
