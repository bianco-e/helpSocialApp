import React, { useState, useEffect } from "react";
import { changeAuthState } from "../data/apiInteraction";

const Context = React.createContext({});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    changeAuthState(setUser);
  });

  return <Context.Provider value={user}>{children}</Context.Provider>;
};

export default Context;
