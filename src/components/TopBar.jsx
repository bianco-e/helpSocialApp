import React, { useState } from "react";
import { logInUsingGoogle, logOutUsingGoogle } from "../data/apiInteraction.js";
import { Link, useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const TopBar = ({ forLogin = false }) => {
  const history = useHistory();
  const [insertedValue, setInsertedValue] = useState("");

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="/home">AppName</Navbar.Brand>
      <Nav className="mr-auto">
        {forLogin ? (
          <Link to="/" className="navLink">
            ¿Qué es AppName?
          </Link>
        ) : (
          <div className="justifyBetween">
            <Link to="/home" className="navLink">
              &nbsp; Inicio &nbsp;
            </Link>
            <Link to="/needed" className="navLink">
              &nbsp; Se busca &nbsp;
            </Link>
            <Link to="/offers" className="navLink">
              &nbsp; Se ofrece &nbsp;
            </Link>
          </div>
        )}
      </Nav>
      <Form inline>
        {forLogin ? (
          <>
            <Button
              variant="outline-success"
              onClick={() => logInUsingGoogle()}
            >
              Ingresar con Google
            </Button>
            &nbsp;
            <Button variant="outline-primary" onClick={() => {}}>
              Ingresar con Facebook
            </Button>
          </>
        ) : (
          <>
            <InputGroup className="margin0">
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <span className="margin0">🔍</span>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Búsqueda"
                value={insertedValue}
                onChange={(e) => setInsertedValue(e.target.value)}
                onKeyDown={(event) => {
                  if (event.keyCode === 13) {
                    history.push(`/search/${insertedValue}`);
                  }
                }}
              />
            </InputGroup>
            &nbsp;
            <Button variant="danger" onClick={() => logOutUsingGoogle()}>
              Cerrar sesión
            </Button>
          </>
        )}
      </Form>
    </Navbar>
  );
};

export default TopBar;
