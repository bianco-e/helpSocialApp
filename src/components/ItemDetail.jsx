import React from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const ItemDetail = ({ modalShow, setModalShow, itemID, findItemById }) => {
  const {
    description,
    image,
    mobility,
    urgent,
    title,
    user,
    zone,
  } = findItemById(itemID);
  const phoneNumber = 5493464692328;
  const message = `Hola, me interesa el artículo ${title} de socialapp`;
  return (
    <Modal show={modalShow} onHide={() => setModalShow(false)} centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Card
          className="m-2"
          bg={`${urgent && "danger"}`}
          text={`${urgent && "white"}`}
        >
          <Image variant="top" src={image} alt={title} fluid />
          <Card.Body>
            <h6 className={`${urgent ? "bigText white" : "bigText"}`}>
              {title}
            </h6>
            <Card.Text>{description}</Card.Text>
            <Card.Text className="mediumText">Barrio: {zone}</Card.Text>
            <Card.Text className="mediumText">
              {mobility ? "Tiene movilidad" : "No tiene movilidad"}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <div className="flex between">
              <small className="mediumText text-muted">
                <Link
                  className={`${urgent ? "white textDecoNone" : "mediumText"}`}
                  to="/"
                >
                  {user}
                </Link>
              </small>
              {urgent && <h6 className="white">[URGENTE]</h6>}
              <DropdownButton
                id="dropdown-item-button"
                variant="outline-dark"
                title="Contactar"
                size="sm"
              >
                <a
                  href={`https://wa.me/${phoneNumber}?text=${message}`}
                  className="wspLink"
                  target="blank"
                >
                  <Dropdown.Item as="button">Enviar Whatsapp</Dropdown.Item>
                </a>
                <a
                  href={`https://gmail.com`}
                  className="gmailLink"
                  target="blank"
                >
                  <Dropdown.Item as="button">Enviar mail</Dropdown.Item>
                </a>
                <a
                  href={`https://facebook.com`}
                  className="fbkLink"
                  target="blank"
                >
                  <Dropdown.Item as="button">
                    Enviar mensaje de Facebook
                  </Dropdown.Item>
                </a>
              </DropdownButton>
            </div>
          </Card.Footer>
        </Card>
      </Modal.Body>
    </Modal>
  );
};

export default ItemDetail;
