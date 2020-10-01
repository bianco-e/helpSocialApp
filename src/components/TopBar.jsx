import React, { Fragment, useState } from "react";
import styled from "styled-components";
import Media from "react-media";
import { logInUsingGoogle, logOutUsingGoogle } from "../data/apiInteraction.js";
import { Link, useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AboutUs from "./AboutUs";
import InputWithLabel from "./InputWithLabel";

export default function TopBar({ forLogin }) {
  const history = useHistory();
  const [insertedValue, setInsertedValue] = useState("");
  const [modalShow, setModalShow] = useState(false);

  const handleSearch = (e) =>
    e.keyCode === 13 && history.push(`/search/${insertedValue}`);

  return (
    <>
      <Media
        queries={{
          s: "(max-width: 599px)",
          m: "(min-width: 600px) and (max-width: 760px)",
        }}
      >
        {(matches) => (
          <Fragment>
            <Navbar bg="light" expand="lg" sticky="top">
              <Navbar.Brand href="/home">NecesiDar</Navbar.Brand>
              {forLogin ? (
                <>
                  <Nav className="mr-auto">
                    <NavButton onClick={() => setModalShow(true)}>
                      ¿Qué es NecesiDar?
                    </NavButton>
                    <AboutUs
                      modalShow={modalShow}
                      setModalShow={setModalShow}
                    />
                  </Nav>
                  <Form inline>
                    <Button
                      variant="outline-danger"
                      onClick={() => logInUsingGoogle()}
                    >
                      Ingresar con Google
                    </Button>
                  </Form>
                </>
              ) : (
                <>
                  <Nav className="mr-auto">
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
                  </Nav>
                  <Form inline>
                    <InputWithLabel
                      label="🔍"
                      placeholder="Búsqueda"
                      value={insertedValue}
                      onChange={(e) => setInsertedValue(e.target.value)}
                      onKeyDown={(e) => handleSearch(e)}
                      size={
                        matches.m
                          ? { h: "31px", w: "120px" }
                          : { h: "38px", w: undefined }
                      }
                    />
                    <Button
                      variant="danger"
                      size={matches.m ? "sm" : undefined}
                      onClick={() => logOutUsingGoogle()}
                    >
                      Cerrar sesión
                    </Button>
                  </Form>
                </>
              )}
            </Navbar>
          </Fragment>
        )}
      </Media>
    </>
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
