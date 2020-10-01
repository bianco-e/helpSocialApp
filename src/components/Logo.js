import React from "react";
import styled from "styled-components";
import loginBg from "../images/loginBg.webp";

export default function Logo() {
  return (
    <Wrapper href="/">
      <Image src={loginBg} />
      <Text>NecesiDar</Text>
    </Wrapper>
  );
}
const Wrapper = styled.a({
  alignItems: "center",
  color: "#000",
  display: "flex",
  marginRight: "1%",
  textDecoration: "none",
  ["&:hover"]: {
    color: "#000",
    textDecoration: "none",
  },
});
const Image = styled.img({
  marginRight: "3px",
  width: "20px",
});
const Text = styled.span({
  fontSize: "18px",
});
