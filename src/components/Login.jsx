import React from "react";
import firebase from "../data/firebase.js";
import { AppCTX } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import TopBar from "./TopBar";

const Login = () => {
  const { user, setUser } = React.useContext(AppCTX);
  console.log(user);
  const history = useHistory();
  return (
    <>
      <TopBar forLogin={true} />
      <div className="loginDiv">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Usuario</Form.Label>
            <Form.Control type="text" placeholder="Usuario" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" />
          </Form.Group>
          <div className="App">
            <Link to="/myoffers">
              <Button variant="info">Olvidé mi contraseña</Button>
            </Link>
            <Button
              variant="info"
              onClick={() =>
                firebase
                  .doSignInWithGoogle()
                  .then((googleUser) => {
                    setUser(googleUser);
                    history.push("/home");
                  })
                  .catch((error) => console.log(error))
              }
            >
              Iniciar sesión
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
