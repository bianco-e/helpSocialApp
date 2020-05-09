import React from "react";

const zones = [
  "Abasto",
  "Alvear",
  "Belgrano",
  "Centro",
  "Cerámica",
  "Cinco Esquinas",
  "Cristalería",
  "Echesortu",
  "Empalme Graneros",
  "España y Hospitales",
  "Fisherton",
  "Godoy",
  "Grandoli",
  "Industrial",
  "La Guardia",
  "La Sexta",
  "Las Delicias",
  "Las Flores",
  "Las Heras",
  "Lourdes",
  "Ludueña",
  "Luis Agote",
  "Martin",
  "Moderno",
  "Nuevo Alberdi",
  "Parque",
  "Pichincha",
  "Refinería",
  "Rucci",
  "Saladillo",
  "Sorrento",
  "Tablada",
  "Tiro Suizo",
];

const mapZonesIntoOptions = () => {
  return zones.map((zone) => {
    return (
      <option value={zone} key={zone}>
        {zone}
      </option>
    );
  });
};

export { mapZonesIntoOptions };
