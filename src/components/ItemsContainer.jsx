import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Items from "../components/Items";

export default function ItemsContainer({
  collection,
  deleteItemFn,
  itemsToShow,
  title,
  width,
}) {
  return (
    <ItemsBox width={width}>
      <Card border="primary" className="m-2">
        <Card.Header>
          <ContainerTitle>{title}</ContainerTitle>
        </Card.Header>
        <Items
          deleteItemFn={deleteItemFn}
          collection={collection}
          itemsToShow={itemsToShow}
        />
      </Card>
    </ItemsBox>
  );
}

const ItemsBox = styled.section({
  width: (props) => props.width || "50%",
});
const ContainerTitle = styled.h6({
  color: "rgb(150, 150, 170)",
  margin: "0",
  textAlign: "center",
});
