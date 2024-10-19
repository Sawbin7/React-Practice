import React from "react";
import Child from "./Child";

const P = (props) => {
  return (
    <>
      <h1> This is form patent</h1>
      <Child name={props.name} />
    </>
  );
};

export default P;
