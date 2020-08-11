import React, { useState } from "react";
import styled from "styled-components";
import { logInUsingGoogle, logOutUsingGoogle } from "../data/apiInteraction.js";
import { Link, useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import AboutUs from "./AboutUs";

export default function TopBar({ forLogin = false }) {
  const history = useHistory();
  const [insertedValue, setInsertedValue] = useState("");
  const [modalShow, setModalShow] = useState(false);

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="/home">AppName</Navbar.Brand>
      <Nav className="mr-auto">
        {forLogin ? (
          <>
            <NavButton onClick={() => setModalShow(true)}>
              ¿Qué es AppName?
            </NavButton>
            <AboutUs modalShow={modalShow} setModalShow={setModalShow} />
          </>
        ) : (
          <Container>
            <Link to="/home">
              <NavButton>Inicio</NavButton>
            </Link>
            <Link to="/needs">
              <NavButton>Se busca</NavButton>
            </Link>
            <Link to="/offers">
              <NavButton>Se dona</NavButton>
            </Link>
          </Container>
        )}
      </Nav>
      <Form inline>
        {forLogin ? (
          <Button variant="outline-danger" onClick={() => logInUsingGoogle()}>
            Ingresar con Google
          </Button>
        ) : (
          <>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <Span>🔍</Span>
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
            <Button variant="danger" onClick={() => logOutUsingGoogle()}>
              Cerrar sesión
            </Button>
          </>
        )}
      </Form>
    </Navbar>
  );
}
const Container = styled.section({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
const NavButton = styled.button({
  background: "none",
  border: "0",
  color: "rgb(150, 150, 170)",
  cursor: "pointer",
  ["&:hover"]: {
    textDecoration: "none",
    color: "rgb(130, 130, 140)",
  },
  ["&:active"]: {
    textDecoration: "none",
    color: "rgb(80, 80, 90)",
  },
});
const Span = styled.span({
  margin: "0",
});
