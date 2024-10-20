import React from "react";
import Greet from "./Greet";
import Gp from "./components/Props/Gp";
import HostCR from "./components/ConditionalRender/HostCR";
import Display from "./components/Events/Display";
import DisplayHook from "./components/Hooks/Display";

const App = () => {
  return (
    <>
      {/* <Greet /> */}

      {/* <Gp /> */}

      {/* <HostCR /> */}

      <DisplayHook />
    </>
  );
};

export default App;
