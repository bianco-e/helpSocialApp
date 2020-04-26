import React from "react";
import { AuthContextProvider } from "./context/AuthContext";
import App from "./components/App";

const Main = () => {
  return (
    <AuthContextProvider>
      <App></App>
    </AuthContextProvider>
  );
};

export default Main;
