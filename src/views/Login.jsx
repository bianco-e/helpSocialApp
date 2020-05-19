import React, { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import TopBar from "../components/TopBar";
import { LoginBgImage } from "../components/StyledComponents";

const Login = () => {
  const user = useContext(AuthContext);

  const history = useHistory();
  useEffect(() => {
    user && history.push("/home");
  }, [user]);

  return (
    <LoginBgImage>
      <TopBar forLogin={true} />
    </LoginBgImage>
  );
};

export default Login;
