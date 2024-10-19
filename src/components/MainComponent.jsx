import React from "react";

const MainComponent = () => {
  let ar = ["arar", "list", "object"];

  const date = new Date();
  return (
    <>
      <h2>Main Content</h2>
      <p> This is main content of website</p>

      {ar.map((item) => (
        <li key={item}> {item} </li>
      ))}
      <h2> this ain't awesome</h2>

      <p> Date : {date.getHours()} </p>
    </>
  );
};

export default MainComponent;
