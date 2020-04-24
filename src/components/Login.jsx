import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">AppName</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#">¿Qué es AppName?</Nav.Link>
          </Nav>
          <Form inline>
            <Link to="/">
              <Button variant="outline-success">Crear cuenta</Button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Navbar>

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
            <Link to="/home">
              <Button variant="info">Iniciar sesión</Button>
            </Link>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
