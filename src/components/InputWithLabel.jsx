import React from "react";
import styled from "styled-components";

export default function InputWithLabel({
  label,
  onChange,
  onKeyDown,
  placeholder,
  size,
  type,
  value,
}) {
  const { w, h } = size;
  return (
    <>
      <Container height={h}>
        <Label>{label}</Label>
        <Input
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          type={type}
          value={value}
          width={w}
        />
      </Container>
    </>
  );
}

const Input = styled.input({
  border: "1px solid #ced4da",
  borderRadius: "0 4px 4px 0",
  fontSize: "15px",
  height: "100%",
  width: (props) => props.width,
  ["&:focus"]: {
    border: "3px solid rgba(220, 53, 69, .3)",
    margin: "-2px",
  },
});
const Label = styled.section({
  backgroundColor: "#ededed",
  border: `1px solid #ced4da`,
  borderRight: "none",
  borderRadius: "4px 0 0 4px",
  color: "#495057",
  display: "grid",
  height: "100%",
  placeItems: "center",
});
const Container = styled.section({
  display: "flex",
  alignItems: "center",
  height: (props) => props.height,
  margin: "0 4px",
});
