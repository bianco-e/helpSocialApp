import React, { useState } from "react";
import { logInUsingGoogle, logOutUsingGoogle } from "../data/apiInteraction.js";
import { Link, useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import AboutUs from "./AboutUs";

const TopBar = ({ forLogin = false }) => {
  const history = useHistory();
  const [insertedValue, setInsertedValue] = useState("");
  const [modalShow, setModalShow] = useState(false);

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="/home">AppName</Navbar.Brand>
      <Nav className="mr-auto">
        {forLogin ? (
          <>
            <Button bsPrefix="navLink" onClick={() => setModalShow(true)}>
              ¿Qué es AppName?
            </Button>
            <AboutUs modalShow={modalShow} setModalShow={setModalShow} />
          </>
        ) : (
          <div className="flex between">
            <Link to="/home" className="navLink">
              &nbsp; Inicio &nbsp;
            </Link>
            <Link to="/needs" className="navLink">
              &nbsp; Se busca &nbsp;
            </Link>
            <Link to="/offers" className="navLink">
              &nbsp; Se dona &nbsp;
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
