import React, { useState } from "react";

const UseState1 = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Handosme");
  const [arr, setArr] = useState(["Apple", "Mango", "Strawberry"]);

  const AddItem = () => {
    let item = "Pineapple";
    let ar = [...arr, item];
    setArr(ar);

    // setArr([...arr, item]);
  };

  return (
    <>
      <button onClick={() => setCount(count + 1)}> +</button>
      <button onClick={() => setCount(count - 1)}> - </button>
      <button onClick={() => setCount(0)}> Reset </button>
      <hr />
      <h2> {count} </h2>

      <hr />

      <input
        placeholder="Naughty"
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
      <h3> {text} </h3>
      <hr />

      <h2> List of Product</h2>

      {arr.map((f) => (
        <li key={Math.random()}> {f} </li>
      ))}

      <button onClick={AddItem}> Add Item </button>
    </>
  );
};

export default UseState1;
