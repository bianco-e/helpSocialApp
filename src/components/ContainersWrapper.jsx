import React from "react";
import styled from "styled-components";

export default function ContainersWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  margin: "0 10px 0 205px",
});
