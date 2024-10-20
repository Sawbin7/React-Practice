import React, { useState } from "react";

const Exe1 = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const addItemtoList = () => {
    if (input.trim() !== "") {
      let arr = [...list, input];
      setList(arr);
      setInput("");
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      addItemtoList();
    }
  };

  return (
    <>
      <input
        type="text"
        value={input}
        placeholder="Enter Task"
        onChange={handleInput}
        onKeyDown={handleKey}
      />

      <input type="submit" value="Submit" onClick={addItemtoList} />

      <hr />

      <h1> Yout TODO LIST</h1>

      <ol type="A">
        {list.map((item) => (
          <li key={Math.random()}> {item} </li>
        ))}
      </ol>
    </>
  );
};

export default Exe1;
