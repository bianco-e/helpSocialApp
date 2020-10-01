import React from "react";
import styled from "styled-components";

const style = {
  lg: "16px",
  sm: "14px",
};

export default function NavButton({ onClick, size = "lg", title }) {
  return (
    <Button fSize={style[size]} onClick={() => onClick()} title={title}>
      {title}
    </Button>
  );
}

const Button = styled.button({
  background: "none",
  border: "0",
  color: "rgb(150, 150, 170)",
  cursor: "pointer",
  fontSize: (props) => props.fSize,
  textDecoration: "none",
  transition: "all .3s ease",
  ["&:hover"]: {
    color: "rgb(140, 140, 140)",
  },
});
