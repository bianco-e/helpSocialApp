import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const Profile = () => {
  const user = useContext(AuthContext);
  if (!user) return null;
  const userName = user.displayName;
  const userPicture = user.photoURL;
  console.log(user);

  return (
    <Card bsPrefix="profileDiv" bg="info" variant="position">
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

          <Link to="/myoffers" className="profileButton">
            <Button variant="outline-light">Mis ofertas</Button>
          </Link>

          <Link to="/myneeds" className="profileButton">
            <Button variant="outline-light">Mis búsquedas</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Profile;
