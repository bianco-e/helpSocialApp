import React, { useState, useEffect } from "react";
import {
  DivFlexStartLeft,
  DivFlexBetween,
} from "../components/StyledComponents";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import TopBar from "../components/TopBar";
import Profile from "../components/Profile";

const ItemDetail = ({ getItemByID, messageWord }) => {
  let { IDParam } = useParams();
  const [itemData, setItemData] = useState("");

  const getItemByIDParam = async (IDParam) => {
    setItemData(await getItemByID(IDParam));
  };

  useEffect(() => {
    getItemByIDParam(IDParam);
  }, []);

  const { description, image, mobility, urgent, title, user, zone } = itemData;

  const phoneNumber = 549348224;
  const message = `¡Hola! ${messageWord} el artículo: '${title}' de AppName que vi en ${window.location.href}`;
  return (
    <>
      <TopBar />
      <Profile />
      <DivFlexStartLeft>
        <Card
          className="m-2"
          bg={`${urgent && "danger"}`}
          text={`${urgent && "white"}`}
        >
          <Image variant="top" src={image} alt={title} fluid />
          <Card.Body>
            <h6 className={`${urgent ? "bigText white" : "bigText"}`}>
              {title}
            </h6>
            <Card.Text>{description}</Card.Text>
            <Card.Text className="mediumText">Barrio: {zone}</Card.Text>
            <Card.Text className="mediumText">
              {mobility ? "Tiene movilidad" : "No tiene movilidad"}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <DivFlexBetween>
              <small
                className={`${
                  urgent ? "mediumText white" : "mediumText text-muted"
                }`}
              >
                {user}
              </small>
              {urgent && <h6 className="white">-URGENTE-</h6>}
              <DropdownButton
                id="dropdown-item-button"
                variant="outline-dark"
                title="Contactar"
                size="sm"
              >
                <a
                  href={`https://wa.me/${phoneNumber}?text=${message}`}
                  className="wspLink"
                  target="blank"
                >
                  <Dropdown.Item as="button">Enviar Whatsapp</Dropdown.Item>
                </a>
              </DropdownButton>
            </DivFlexBetween>
          </Card.Footer>
        </Card>
      </DivFlexStartLeft>
    </>
  );
};

export default ItemDetail;
