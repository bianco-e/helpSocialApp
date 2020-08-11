import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Filter({ filterFn, urgFilter }) {
  return (
    <FilterContainer>
      <Card>
        <Card.Header>
          <Title>Filtrar</Title>
        </Card.Header>
        {urgFilter && (
          <Button
            size="sm"
            variant="outline-danger"
            onClick={() => {
              filterFn("Urgent");
            }}
          >
            Urgentes
          </Button>
        )}
        <Button
          size="sm"
          variant="light"
          onClick={() => {
            filterFn("Accesorios");
          }}
        >
          Accesorios
        </Button>
        <Button
          size="sm"
          variant="light"
          onClick={() => {
            filterFn("Descartables");
          }}
        >
          Descartables
        </Button>
        <Button
          size="sm"
          variant="light"
          onClick={() => {
            filterFn("Internación");
          }}
        >
          Internación
        </Button>
        <Button
          size="sm"
          variant="light"
          onClick={() => {
            filterFn("Rehabilitación");
          }}
        >
          Rehabilitación
        </Button>
        <Button
          size="sm"
          variant="light"
          onClick={() => {
            filterFn("Tratamientos");
          }}
        >
          Tratamientos
        </Button>
        <Button
          size="sm"
          variant="light"
          onClick={() => {
            filterFn("ALL");
          }}
        >
          Quitar filtro
        </Button>
      </Card>
    </FilterContainer>
  );
}

const FilterContainer = styled.section({
  display: "flex",
  flexDirection: "column",
  margin: ".5rem",
});
const Title = styled.h6({
  color: "rgb(150, 150, 170)",
  margin: "0",
});
