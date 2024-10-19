import React from "react";

const Condition1 = () => {
  const bool = true;
  let age = 8;

  let item = ["apple", "Mango", "Pear", "peach"];
  return (
    <>
      {bool && <h1> Hello CR</h1>}

      {age > 18 ? (
        <h2> Age is grater than 18</h2>
      ) : (
        <h2> Age is lesser than 18</h2>
      )}

      {item.length > 0 && <h2> You have {item.length} item.</h2>}
      <ul>
        {item.map((item) => (
          <li key={item}> {item} </li>
        ))}
      </ul>
    </>
  );
};

export default Condition1;
