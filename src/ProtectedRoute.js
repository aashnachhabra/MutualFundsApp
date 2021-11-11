import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useHistory } from "react-router";
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const history = useHistory();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("Auth") === "true") {
          return <Component {...props} />;
        }
        if (localStorage.getItem("Auth") === "false")
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
