import React from "react";
import Profile from "./Profile";
import TopBar from "./TopBar";
import Items from "./Items";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const MyOptions = ({ needs = false, offers = false }) => {
  return (
    <div>
      <TopBar />
      <Profile />
      <div className="App margin21-1">
        <div className="flexColumn">
          {needs ? <Items myneeds={true} /> : <Items myoffers={true} />}
          <Link to={`${offers ? "/addoffer" : "/addneed"}`}>
            <Button variant="outline-info">
              Agregar {offers ? "oferta" : "búsqueda"}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyOptions;
