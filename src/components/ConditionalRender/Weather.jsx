import React from "react";

const WeatherCheck = ({ temp }) => {
  if (temp < 15) {
    return <h2> It's Cold outside</h2>;
  } else if (temp >= 15 && temp <= 25) {
    return <h2> It's Good outside</h2>;
  } else if (temp > 25) {
    return <h2> It's Hot outside</h2>;
  }
};

const Weather = () => {
  const temp = 10;
  return (
    <>
      {/* <WeatherCheck temp={temp} /> */}

      <h1> Hello</h1>
      {temp < 15 ? (
        <h2> It's cold Outside</h2>
      ) : temp >= 15 && temp <= 25 ? (
        <h2> It's nice Outside</h2>
      ) : temp > 25 ? (
        <h2> It's hot outside</h2>
      ) : (
        <h2> Invalid weather</h2>
      )}
    </>
  );
};

export default Weather;
