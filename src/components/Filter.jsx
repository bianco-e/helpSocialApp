import React from "react";
import {
  filterNeededByCategory,
  filterOffersByCategory,
} from "../data/apiInteraction";

const Filter = ({ offers = false, needed = false }) => {
  return (
    <div className="padding2pc filterDiv">
      <h6>Filtrar: </h6>
      <button
        className="filterButton"
        onClick={() => {
          needed ? filterNeededByCategory() : filterOffersByCategory();
        }}
      >
        Accesorios
      </button>
      <button
        className="filterButton"
        onClick={() => {
          needed ? filterNeededByCategory() : filterOffersByCategory();
        }}
      >
        Descartables
      </button>
      <button
        className="filterButton"
        onClick={() => {
          needed ? filterNeededByCategory() : filterOffersByCategory();
        }}
      >
        Internación
      </button>
      <button
        className="filterButton"
        onClick={() => {
          needed ? filterNeededByCategory() : filterOffersByCategory();
        }}
      >
        Rehabilitación
      </button>
      <button
        className="filterButton"
        onClick={() => {
          needed ? filterNeededByCategory() : filterOffersByCategory();
        }}
      >
        Tratamientos
      </button>
    </div>
  );
};

export default Filter;
