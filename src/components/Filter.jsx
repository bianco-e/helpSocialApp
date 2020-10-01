import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { categories } from "../data/data";

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
            onClick={() => filterFn("Urgent")}
          >
            Urgentes
          </Button>
        )}
        {categories.map(
          (name, idx) =>
            idx != 0 && (
              <Button size="sm" variant="light" onClick={() => filterFn(name)}>
                {name}
              </Button>
            )
        )}
        <Button size="sm" variant="light" onClick={() => filterFn("ALL")}>
          Quitar filtro
        </Button>
      </Card>
    </FilterContainer>
  );
}

const FilterContainer = styled.section({
  display: "flex",
  flexDirection: "column",
  margin: "8px",
});
const Title = styled.h6({
  color: "rgb(150, 150, 170)",
  margin: "0",
});
