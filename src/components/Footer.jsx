import React from "react";
import MainComponent from "./MainComponent";

const Footer = () => {
  //   let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, "This is freaking numbers"];

  let data = [
    { id: 1, name: "Sabin", age: 22 },
    { id: 2, name: "Matina", age: 23 },
    { id: 3, name: "Nibas", age: 32 },
    { id: 4, name: "Vintuna", age: 21 },
  ];

  return (
    <>
      <p>My 2024 react website</p>{" "}
      {data.map(({ id, name, age }) => (
        <ul key={id}>
          <li> {id} </li>
          <li> {name} </li>
          <li> {age} </li>
        </ul>
      ))}
    </>
  );
};

export default Footer;
