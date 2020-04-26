import React from "react";
import AuthContext from "./context/AuthContext";
import App from "./components/App";

const Main = () => {
  return (
    <AuthContext>
      <App></App>
    </AuthContext>
  );
};

export default Main;
