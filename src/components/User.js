import React from "react";

const User = ({ name, location }) => {
  return (
    <div className="user-card">
      <h3>Name: {name}</h3>
      <h3>Location: {location}</h3>
    </div>
  );
};

export default User;
