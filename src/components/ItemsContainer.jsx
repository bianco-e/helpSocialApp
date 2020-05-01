import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const ItemsContainer = ({ path = false, title, children }) => {
  return (
    <Card border="primary" className="m-2">
      <Card.Header>
        {path ? (
          <Link to={path} className="textDecoNone">
            <h6 className="margin0">{title}</h6>
          </Link>
        ) : (
          <h6 className="margin0">{title}</h6>
        )}
      </Card.Header>
      {children}
    </Card>
  );
};

export default ItemsContainer;
