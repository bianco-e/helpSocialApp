import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function SmallItem({
  image,
  title,
  description,
  user,
  id,
  urgent = false,
  collection,
  deleteItemFn,
  deleteItemFromArray,
}) {
  const history = useHistory();

  const itemClickFn = () => {
    history.push(`/${collection}/${id}`);
  };
  const handleDelete = (e) => {
    e.stopPropagation();
    deleteItemFn(id);
    deleteItemFromArray(id);
  };

  return (
    <ItemButton
      bgColor={urgent ? "#dc3545" : "transparent"}
      onClick={() => itemClickFn()}
    >
      <ItemImage src={image} alt={title} />
      <TextContainer>
        <Title color={urgent ? "white" : undefined}>{title}</Title>
        <Description color={urgent ? "white" : undefined}>
          {description}
        </Description>
        <Author color={urgent ? "white" : undefined}>{user}</Author>
      </TextContainer>
      {deleteItemFn && (
        <DeleteButton
          bgColor={urgent ? "black" : "#dc3545"}
          onClick={(e) => handleDelete(e)}
        >
          ✖
        </DeleteButton>
      )}
    </ItemButton>
  );
}

const ItemButton = styled.button({
  alignItems: "center",
  backgroundColor: (props) => props.bgColor,
  border: "0",
  borderRadius: "0.25rem",
  display: "flex",
  justifyContent: "left",
  margin: " 2px",
  padding: "0",
  position: "relative",
  textAlign: "left",
  width: "100%",
});
const ItemImage = styled.img({
  height: "70px",
  width: "100px",
});
const TextContainer = styled.section({
  padding: "0 8px",
});
const Title = styled.h6({
  color: (props) => props.color,
});
const Description = styled.p({
  color: (props) => props.color,
  fontSize: "11px",
  margin: "0",
});
const Author = styled.small({
  color: (props) => props.color,
  fontSize: "11px",
});
const DeleteButton = styled.button({
  backgroundColor: (props) => props.bgColor,
  border: "0",
  borderRadius: ".25rem",
  color: "white",
  position: "absolute",
  right: "1%",
  top: "1%",
});
