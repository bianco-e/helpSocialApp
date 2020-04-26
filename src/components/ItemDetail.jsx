import React from "react";
import Modal from "react-bootstrap/Modal";
import { findItemGloballyById } from "../data/apiInteraction.js";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const ItemDetail = ({ modalShow, setModalShow, itemID }) => {
  const {
    user,
    title,
    image,
    description,
    action,
    area,
    special,
  } = findItemGloballyById(itemID);
  return (
    <Modal
      show={modalShow}
      onHide={() => {
        setModalShow(false);
      }}
      centered
    >
      <Card
        className="m-2"
        bg={`${special && "info"}`}
        text={`${special && "white"}`}
      >
        <Image variant="top" src={image} alt={title} fluid />
        <Card.Body>
          <h6 className={`${special && "white"}`}>{title}</h6>
          <Card.Text className="mediumText">{description}</Card.Text>
          <Card.Text className="mediumText">Zona {area}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <div className="justifyBetween">
            <small className="smallText text-muted">
              {action}
              <Link
                className={`${special ? "white textDecoNone" : "smallText"}`}
                to="/"
              >
                {user}
              </Link>
            </small>
            {special && <h6 className="white">🏮</h6>}
            <Button size="sm" variant="outline-dark">
              Contactar
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </Modal>
  );
};

export default ItemDetail;
