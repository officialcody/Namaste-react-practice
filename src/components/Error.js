import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>OOPS!!!</h1>
      <h2>Something went wrong</h2>
      <p>{JSON.stringify(error)}</p>
    </div>
  );
};

export default Error;
