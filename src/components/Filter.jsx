import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Filter = ({ filterFn, urgFilter = false }) => {
  return (
    <div className="flexColumn filterDiv">
      <Card>
        <Card.Header>
          <h6 className="margin0">Filtrar</h6>
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
    </div>
  );
};

export default Filter;
