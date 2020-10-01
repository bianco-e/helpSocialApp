import React, { useState } from "react";
import { logInUsingGoogle } from "../data/apiInteraction.js";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AboutUs from "./AboutUs";
import NavButton from "./NavButton";

export default function LoginTopBar() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top">
        <Nav className="mr-auto">
          <NavButton
            onClick={() => setModalShow(true)}
            title="¿Qué es NecesiDar?"
          />
          <AboutUs modalShow={modalShow} setModalShow={setModalShow} />
        </Nav>
        <Form inline>
          <Button variant="outline-danger" onClick={() => logInUsingGoogle()}>
            Ingresar con Google
          </Button>
        </Form>
      </Navbar>
    </>
  );
}
