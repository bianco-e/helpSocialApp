import React from "react";
import Modal from "react-bootstrap/Modal";

const AboutUs = ({ modalShow, setModalShow }) => {
  return (
    <Modal show={modalShow} onHide={() => setModalShow(false)} centered>
      <Modal.Header closeButton>
        <Modal.Title>AppName</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6 className="mediumText">
          AppName es una aplicación web para compartir con gente de Rosario
          elementos que puedan servir a alguien más para tratar enfermedades,
          rehabilitar, internarse o simplemente ser de ayuda. Gente que necesita
          y gente que puede ayudar. ARMAR BIEN ESTE TEXTO
        </h6>
      </Modal.Body>
    </Modal>
  );
};

export default AboutUs;
