import React from "react";
import { AuthContextProvider } from "./context/AuthContext";
import Router from "./Router";

export default function Main() {
  return (
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  );
}
