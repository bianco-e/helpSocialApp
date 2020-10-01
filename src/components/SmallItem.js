import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const style = {
  urgent: {
    bg: "#dc3545",
    color: "#FFF",
    secondaryBg: "#000",
  },
  regular: {
    bg: "transparent",
    color: "#000",
    secondaryBg: "#dc3545",
  },
};

export default function SmallItem({
  image,
  title,
  description,
  user,
  id,
  type,
  collection,
  deleteItemFn,
  deleteItemFromArray,
}) {
  const history = useHistory();

  const itemClickFn = () => history.push(`/${collection}/${id}`);

  const handleDelete = (e) => {
    e.stopPropagation();
    deleteItemFn(id);
    deleteItemFromArray(id);
  };

  return (
    <ItemButton bgColor={style[type].bg} onClick={() => itemClickFn()}>
      <ItemImage src={image} alt={title} />
      <TextContainer>
        <Title color={style[type].color}>{title}</Title>
        <Description color={style[type].color}>{description}</Description>
        <Author color={style[type].color}>{user}</Author>
      </TextContainer>
      {deleteItemFn && (
        <DeleteButton
          bgColor={style[type].secondaryBg}
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
  borderRadius: "4px",
  display: "flex",
  justifyContent: "flex-start",
  padding: "0",
  position: "relative",
  textAlign: "left",
  width: "100%",
});
const ItemImage = styled.img({
  height: "70px",
  width: "100px",
});
const TextContainer = styled.div({
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
