import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

const ItemCard = ({
  image,
  title,
  description,
  action,
  user,
  special = false,
}) => {
  return (
    <button className="itemproportion">
      <Card
        className="m-2"
        bg={`${special && "info"}`}
        text={`${special && "white"}`}
      >
        <Image variant="top" src={image} alt={title} fluid />
        <Card.Body>
          <h6 className={`${special ? "bigText white" : "bigText"}`}>
            {title}
          </h6>
          <Card.Text className="mediumText">{description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted smallText">
            {action}{" "}
            <Link className={`${special && "white"}`} to="/">
              {user}
            </Link>
          </small>
        </Card.Footer>
      </Card>
    </button>
  );
};

export default ItemCard;
