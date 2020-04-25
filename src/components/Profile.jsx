import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const Profile = () => {
  return (
    <div className="profileDiv">
      <Card style={{ width: "16rem" }} bg="info" variant="position">
        <Image
          variant="top"
          src="https://www.infofueguina.com/u/fotografias/fotosnoticias/2018/9/9/46431.jpg"
          className="profileImage"
          roundedCircle
          fluid
        />
        <Card.Body>
          <div className="flexColumn">
            <h4 className="padding">Máximo Cozetti</h4>
            <h6 className="padding">Zona sur</h6>
            <h6 className="padding">Con movilidad</h6>

            <Link to="/myoffers" className="profileButton">
              <Button variant="outline-dark">Mis ofertas</Button>
            </Link>

            <Link to="/myneeds" className="profileButton">
              <Button variant="outline-dark">Mis búsquedas</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Profile;
