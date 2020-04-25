import React from "react";
import Modal from "react-bootstrap/Modal";
import { allTheArrays } from "../data/data.js";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

const ItemDetail = ({ modalShow, setModalShow, itemID }) => {
  const {
    user,
    title,
    image,
    description,
    action,
    special,
  } = allTheArrays.find((item) => {
    return item.id === itemID;
  });
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
        </Card.Body>
        <Card.Footer>
          <small className="smallText text-muted">
            {action}
            <Link
              className={`${special ? "white textDecoNone" : "smallText"}`}
              to="/"
            >
              {user}
            </Link>
          </small>
        </Card.Footer>
      </Card>
    </Modal>
  );
};

export default ItemDetail;
