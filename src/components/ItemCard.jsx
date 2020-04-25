import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import ItemDetail from "../components/ItemDetail";

const ItemCard = ({
  image,
  title,
  description,
  action,
  user,
  id,
  special = false,
}) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <button className="itemproportion" onClick={() => setModalShow(true)}>
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
      <ItemDetail
        modalShow={modalShow}
        setModalShow={setModalShow}
        itemID={id}
      />
    </button>
  );
};

export default ItemCard;
