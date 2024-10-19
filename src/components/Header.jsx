import React from "react";

const Header = () => {
  let greet = "Good Morning Mr sabin";
  let msg = <h1> {greet} </h1>;
  let m = false;

  return (
    <>
      <h1> Welcome to my website</h1>{" "}
      <nav>
        <a href="#"> Home </a>
        <a href="#"> About </a>
        <a href="#"> Contact</a>
      </nav>
      {msg}
      {!m && <h1> This is FUcking True</h1>}
    </>
  );
};

export default Header;
