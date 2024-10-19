import React from "react";

const Greeting = () => {
  //   const now = new Date().getHours();
  const now = 2;
  return (
    <>
      {now > 12 && now <= 18 ? (
        <h2> Good AfterNoon</h2>
      ) : now > 18 && now <= 20 ? (
        <h2> Good Evening</h2>
      ) : (
        <h2>Good Morning</h2>
      )}
    </>
  );
};

export default Greeting;
