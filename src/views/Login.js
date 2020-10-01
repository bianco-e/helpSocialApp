import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import AuthContext from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import loginBg from "../images/loginBg.webp";

import LoginTopBar from "../components/LoginTopBar";

export default function Login() {
  const user = useContext(AuthContext);
  const history = useHistory();
  useEffect(() => {
    user && history.push("/home");
  }, [user]);

  return (
    <LoginBgImage>
      <LoginTopBar />
    </LoginBgImage>
  );
}

const LoginBgImage = styled.div({
  backgroundImage: `url(${loginBg})`,
  backgroundRepeat: "no-repeat",
  height: "100vh",
});
