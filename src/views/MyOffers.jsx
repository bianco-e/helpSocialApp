import React from "react";
import Profile from "../components/Profile";
import TopBar from "../components/TopBar";
import Items from "../components/Items";
import Filter from "../components/Filter";
import ItemsContainer from "../components/ItemsContainer";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const MyOptions = () => {
  return (
    <div>
      <TopBar />
      <Profile />
      <div className="margin21-1 flexStart left">
        <Filter filterFn={{}} />
        <div className="width100pc">
          <ItemsContainer path="/myoffers" title="Mis ofertas">
            <Items arrayToRender={[]} />
          </ItemsContainer>
        </div>
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
