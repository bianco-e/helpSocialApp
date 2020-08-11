import React from "react";
import styled from "styled-components";
import Modal from "react-bootstrap/Modal";

export default function AboutUs({ modalShow, setModalShow }) {
  return (
    <Modal show={modalShow} onHide={() => setModalShow(false)} centered>
      <Modal.Header closeButton>
        <Modal.Title>NecesiDar</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Text>
          NecesiDar es una red social de ayuda donde los usuarios pueden
          compartir con gente de la misma ciudad cosas que necesiten o que
          pueden donar para alguien más. Especialmente objetos que respondan a
          una necesidad de cuidado de la salud, ya sea para tratar enfermedades,
          rehabilitar, internarse o ayudas en general.
        </Text>
      </Modal.Body>
    </Modal>
  );
}

const Text = styled.h5({
  textAlign: "center",
  lineHeight: "30px",
});
