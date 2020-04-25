import React from "react";
import Profile from "./Profile";
import TopBar from "./TopBar";
import Items from "./Items";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const MyOptions = ({ arrayToRender, myneeds = false, myoffers = false }) => {
  return (
    <div>
      <TopBar />
      <Profile />
      <div className="App margin21-1">
        <div className="flexColumn">
          {myneeds ? (
            <Items arrayToRender={arrayToRender} myneeds={true} />
          ) : (
            <Items arrayToRender={arrayToRender} myoffers={true} />
          )}
          <Link to={`${myoffers ? "/addoffer" : "/addneed"}`}>
            <Button variant="outline-info">
              Agregar {myoffers ? "oferta" : "búsqueda"}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyOptions;
