import React from "react";
import { AppCTX } from "../context/AuthContext";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const Profile = () => {
  const { user } = React.useContext(AppCTX);
  if (!user) return null;
  const userName = user.additionalUserInfo.profile.name;
  const userPicture = user.additionalUserInfo.profile.picture;

  return (
    <div className="profileDiv">
      <Card style={{ width: "16rem" }} bg="info" variant="position">
        <Image
          variant="top"
          src={userPicture}
          className="profileImage"
          alt="Profile picture"
          roundedCircle
          fluid
        />
        <Card.Body>
          <div className="flexColumn">
            <h4 className="padding">{userName}</h4>
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
