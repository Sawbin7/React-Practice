import React, { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
  });

  const updateName = (e) => {
    const { name, value } = e.target;

    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <label>
        {" "}
        Name :
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={updateName}
        />
      </label>

      <label>
        {" "}
        Age :
        <input
          type="text"
          name="age"
          value={profile.age}
          onChange={updateName}
        />
      </label>
      <hr />
      <h3> Profile Info</h3>

      <h3> Name : {profile.name} </h3>
      <h3> Age : {profile.age} </h3>
    </>
  );
};

export default Profile;
