import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import AuthContext from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import TopBar from "../components/TopBar";

export default function Login() {
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
}

const LoginBgImage = styled.div({
  backgroundImage:
    'url("https://fplogoimages.withfloats.com/actual/5eaffa109e9d0c0001ea459b.png")',
  height: "100vh",
  backgroundRepeat: "no-repeat",
});
