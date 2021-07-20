import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogined } from "../utils/auth";
function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        console.log(location);
        return isLogined() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}

export default PrivateRoute;
