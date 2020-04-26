import React, { useState, useEffect } from "react";
import firebase from "../data/firebase";

const Context = React.createContext({});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    firebase.auth.onAuthStateChanged((user) => {
      if (user) setUser(user);
      else setUser(undefined);
    });
  });

  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
};

export default Context;
