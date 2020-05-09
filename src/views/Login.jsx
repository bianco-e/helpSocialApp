import React, { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import TopBar from "../components/TopBar";

const Login = () => {
  const user = useContext(AuthContext);

  const history = useHistory();
  useEffect(() => {
    user && history.push("/home");
  }, [user]);

  return (
    <div className="imageBg">
      <TopBar forLogin={true} />
    </div>
  );
};

export default Login;
