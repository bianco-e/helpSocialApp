import React, { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import Image from "react-bootstrap/Image";
import TopBar from "../components/TopBar";

const Login = () => {
  const imagenMuestra =
    "https://media.istockphoto.com/vectors/help-social-concept-vector-id1059943696";
  const user = useContext(AuthContext);
  const history = useHistory();
  useEffect(() => {
    user && history.push("/home");
  }, [user]);
  return (
    <>
      <TopBar forLogin={true} />
      <Image src={imagenMuestra} fluid />
    </>
  );
};

export default Login;
