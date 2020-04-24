import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

const Profile = () => {
  return (
    <div>
      <Card style={{ width: "16rem" }} bg="info" variant="position">
        <Image
          variant="top"
          src="https://www.infofueguina.com/u/fotografias/fotosnoticias/2018/9/9/46431.jpg"
          className="profileImage"
          roundedCircle
          fluid
        />
        <Card.Body>
          <div className="flexColumn">
            <h4>Santi Izaguirre</h4>
            <h6>Zona sur</h6>
            <h6>Tiene movilidad</h6>
            <Dropdown as={ButtonGroup} className="profileButton">
              <Button variant="light">Mis ofertas</Button>
              <Dropdown.Toggle
                split
                variant="light"
                id="dropdown-split-basic"
              />
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Agregar oferta</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Editar oferta</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown as={ButtonGroup}>
              <Button variant="light">Mis búsquedas</Button>
              <Dropdown.Toggle
                split
                variant="light"
                id="dropdown-split-basic"
              />
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  Agregar búsqueda
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Editar búsqueda</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Profile;
