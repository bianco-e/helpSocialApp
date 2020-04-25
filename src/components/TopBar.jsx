import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const TopBar = ({ forLogin = false }) => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="/home">AppName</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {forLogin ? (
            <Nav.Link href="#">¿Qué es AppName?</Nav.Link>
          ) : (
            <>
              <Nav.Link href="/home">Inicio</Nav.Link>
              <Nav.Link href="/needed">Se busca</Nav.Link>
              <Nav.Link href="/offers">Se ofrece</Nav.Link>
            </>
          )}
        </Nav>
        <Form inline>
          {forLogin ? (
            <>
              <Link to="/">
                <Button variant="outline-success">Crear cuenta</Button>
              </Link>
            </>
          ) : (
            <Form.Control
              type="text"
              placeholder="Búsqueda"
              className="mr-sm-2"
            />
          )}
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopBar;
