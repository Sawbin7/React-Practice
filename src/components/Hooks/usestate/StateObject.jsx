import React, { useState } from "react";

const StateObject = () => {
  const [data, setData] = useState({
    name: "Sabin",
    age: 18,
  });

  const [employeeData, setEmployeeData] = useState([
    { id: 1, name: "Sabin Poudel", Role: "Technical Lead" },
    { id: 2, name: "Rishab Shrestha", Role: "Marketing Lead" },
  ]);

  const changeData = () => {
    let arr = [...employeeData];
    let updatedArr = arr.map((data) =>
      data.id === 1 ? { ...data, Role: "Technical Head" } : data
    );
    setEmployeeData(updatedArr);
    console.log(updatedArr);
    // -----------------Different approach for doing same thing----------------------------
    // setEmployeeData(
    //   employeeData.map((data) =>
    //     data.id === 1 ? { ...data, Role: "Chnaged" } : data
    //   )
    // );
  };

  return (
    <>
      <h3> Name : {data.name}</h3>
      <h3> Age : {data.age}</h3>

      <button onClick={() => setData({ ...data, age: 22 })}>
        {" "}
        Change Age{" "}
      </button>

      <hr />

      {employeeData.map((m) => (
        <h3 key={Math.random()}>
          {" "}
          Name: {m.name} Role : {m.Role}{" "}
        </h3>
      ))}

      <button onClick={changeData}> Change Data</button>
    </>
  );
};

export default StateObject;
