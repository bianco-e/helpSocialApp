import React, { useState } from "react";

export const AppCTX = React.createContext();
const AuthContext = ({ children }) => {
  const [user, setUser] = useState();
  return (
    <AppCTX.Provider value={{ user: user, setUser: setUser }}>
      {children}
    </AppCTX.Provider>
  );
};

export default AuthContext;
