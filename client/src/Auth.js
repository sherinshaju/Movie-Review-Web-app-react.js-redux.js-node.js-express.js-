import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ component: Component, ...rest }) {
  let auth = useSelector(state => state.counterReducer.viewMovie);

  return (
    <Route
      {...rest}
      render={props =>
        auth.length !== 0 ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default PrivateRoute;
