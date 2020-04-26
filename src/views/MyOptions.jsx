import React from "react";
import Profile from "../components/Profile";
import TopBar from "../components/TopBar";
import Items from "../components/Items";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const MyOptions = ({ arrayToRender, myneeds = false, myoffers = false }) => {
  return (
    <div>
      <TopBar />
      <Profile />
      <div className="flexColumn margin21-1">
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
  );
};

export default MyOptions;
