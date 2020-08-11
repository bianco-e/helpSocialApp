import React from "react";
import styled from "styled-components";
import { ContainerTitle } from "./StyledComponents";
import Card from "react-bootstrap/Card";

export default function ItemsContainer({ children, title, width }) {
  return (
    <ItemsBox width={width}>
      <Card border="primary" className="m-2">
        <Card.Header>
          <ContainerTitle>{title}</ContainerTitle>
        </Card.Header>
        {children}
      </Card>
    </ItemsBox>
  );
}

const ItemsBox = styled.section({
  width: (props) => props.width || "50%",
});
