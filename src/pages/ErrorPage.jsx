import React from "react";
import { NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError(); //It is a new hook
  console.log(error);

  return (
    <div>
      <h1>Error</h1>
      {error && <p>{error.data}</p>}
      <NavLink to="/">
        <button>Home Page</button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
