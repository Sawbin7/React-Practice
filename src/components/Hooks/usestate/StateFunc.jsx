import React, { useState } from "react";

const StateFunc = () => {
  const [count, setCount] = useState(() => {
    const initialCount = 12;
    return initialCount;
  });

  return (
    <>
      <h1> {count}</h1>{" "}
      <button onClick={() => setCount((e) => e + 1)} type="submit">
        {" "}
        +{" "}
      </button>
    </>
  );
};

export default StateFunc;
