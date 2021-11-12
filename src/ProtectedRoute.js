import React from "react";
import { Route, Redirect } from "react-router-dom";
const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("isLoggedIn") === "true") {
          return <Component {...props} />;
        } else
          return (
            <Redirect
              to={{ path: "/login", state: { from: props.location } }}
            />
          );
      }}
    />
  );
};

export default ProtectedRoute;
