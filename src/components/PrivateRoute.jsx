import React, { useContext } from "react";
import Context from "../context/AuthContext";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ render, ...otherProps }) => {
  const user = useContext(Context);
  return (
    <Route
      {...otherProps}
      render={(props) => (user ? render() : <Redirect to="/" />)}
    />
  );
};

export default PrivateRoute;
