import React from "react";

const handleChange = () => console.log("You Pressed me ");

const MouseEvent = () => {
  return (
    <>
      <button onClick={handleChange}> Click Me</button>
      <button onDoubleClick={() => console.log("Double CLick")}>
        {" "}
        Double Click Me
      </button>
      <div>MouseEvent</div>
    </>
  );
};

export default MouseEvent;
