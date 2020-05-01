import React from "react";
import Profile from "../components/Profile";
import TopBar from "../components/TopBar";
import Items from "../components/Items";
import Filter from "../components/Filter";
import ItemsContainer from "../components/ItemsContainer";

import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const MyOptions = ({ myneeds = false, myoffers = false }) => {
  /*  const getMyNeeds = () => {
    return getAllNeeds().filter((need) => {
      return need.user === "me";
    });
  };
  const getMyOffers = () => {
    return getAllOffers().filter((offer) => {
      return offer.user === "me";
    });
  }; */
  return (
    <div>
      <TopBar />
      <Profile />
      <div className="margin21-1 flexStart left">
        <Filter filterFn={{}} />
        <ItemsContainer path="/myoffers" title="Mis ofertas">
          <Items arrayToRender={[]} />
        </ItemsContainer>
      </div>
      <div className="spinnerDiv">
        <Link to="/addoffer">
          <Button variant="outline-info">Agregar oferta</Button>
        </Link>
      </div>
    </div>
  );
};

export default MyOptions;
