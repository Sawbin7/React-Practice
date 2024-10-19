import React from "react";
import Condition1 from "./Condition1";
import Weather from "./Weather";
import UserStatus from "./UserStatus";
import Greeting from "./Greeting";

const Password = ({ valid }) => {
  if (valid) {
    return <h1> It is valid</h1>;
  } else {
    return <h1> Invalid</h1>;
  }
};

const HostCR = () => {
  return (
    <>
      {/* <Password valid={false} /> */}

      {/* <Condition1 /> */}

      {/* <Weather /> */}

      {/* <UserStatus /> */}

      <Greeting />
    </>
  );
};

export default HostCR;
