import React from "react";
import { H6NoMargin } from "./StyledComponents";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const ItemsContainer = ({ path = false, title, children }) => {
  return (
    <Card border="primary" className="m-2">
      <Card.Header>
        {path ? (
          <Link to={path} className="textDecoNone">
            <H6NoMargin>{title}</H6NoMargin>
          </Link>
        ) : (
          <H6NoMargin>{title}</H6NoMargin>
        )}
      </Card.Header>
      {children}
    </Card>
  );
};

export default ItemsContainer;
