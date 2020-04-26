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
    </Navbar>
  );
};

export default TopBar;
