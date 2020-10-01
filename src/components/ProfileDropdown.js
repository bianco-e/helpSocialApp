import React from "react";
import styled from "styled-components";

export default function IngredientsDropdown({ buttons }) {
  return (
    <Wrapper>
      {buttons.map(({ color, title, onClick }, i) => {
        return (
          <Selector
            color={color}
            bgColor={i % 2 == 0 ? "#FFF" : "#EEE"}
            key={title}
            onClick={() => onClick()}
          >
            {title}
          </Selector>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div({
  alignItems: "center",
  borderRadius: "2px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  minWidth: "120px",
  position: "absolute",
  left: "-70px",
  top: "100%",
  zIndex: "5",
});
const Selector = styled.span({
  background: (props) => props.bgColor,
  color: (props) => props.color || "#222",
  cursor: "pointer",
  fontSize: "14px",
  padding: "5px",
  textAlign: "center",
  width: "100%",
  transition: "all .2 ease",
  ["&:hover"]: {
    background: "#DDD",
  },
});
