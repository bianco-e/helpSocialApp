import React, { useContext } from "react";
import Context from "../context/AuthContext";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ render, ...otherProps }) {
  const user = useContext(Context);
  return (
    <Route
      {...otherProps}
      render={() => (user ? render() : <Redirect to="/" />)}
    />
  );
}
