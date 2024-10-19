import React from "react";

const Status = ({ Islogedin, isAdmin }) => {
  if (Islogedin === true && isAdmin === true) {
    return <h2> Welcome Admin </h2>;
  } else if (isAdmin === false && Islogedin === true) {
    return <h2> Welcome User</h2>;
  }
};

const UserStatus = () => {
  return (
    <>
      <Status Islogedin={true} isAdmin={false} />
    </>
  );
};

export default UserStatus;
