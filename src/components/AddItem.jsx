import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import addImage from "../images/addImage";
import TopBar from "./TopBar";
import Profile from "./Profile";

const AddItem = ({ offer = false, need = false }) => {
  return (
    <div>
      <TopBar />
      <Profile />
      <div className="margin21-1">
        <Card border="primary" className="m-2">
          <Card.Header>
            <h6 className="margin0">Agregar {offer ? "oferta" : "búsqueda"}</h6>
          </Card.Header>
          <div className="flexColumn">
            <Form.Group>
              <br />
              <Form.Label>
                Foto{need ? " ilustrativa" : " del objeto"}
              </Form.Label>
              <br />
              <div className="justifyBetween">
                {addImage}
                <Button variant="outline-info" size="sm">
                  ✚
                </Button>
              </div>
              <Form.Label>Título</Form.Label>
              <Form.Control size="sm" type="text" placeholder="Título" />
              <br />
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Descripción"
                cols="30"
                maxlength="240"
              />
              <br />
              <Form.Label>Zona</Form.Label>
              <Form.Control as="select">
                <option>Misma del perfil</option>
                <option>Otra zona</option>
              </Form.Control>
              <br />
              <Form.Check
                type="checkbox"
                label="¿Dispone de movilidad para facilitar la entrega?"
              />
              <br />
              {need && (
                <>
                  <Form.Check
                    type="checkbox"
                    label="Tildar esta opción si es de necesidad URGENTE"
                  />
                  <br />
                </>
              )}
              <Button variant="outline-info">Subir</Button>
            </Form.Group>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AddItem;
