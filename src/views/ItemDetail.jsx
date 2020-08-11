import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import TopBar from "../components/TopBar";
import Profile from "../components/Profile";

export default function ItemDetail({ getItemByID, messageWord }) {
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
      <Wrapper>
        <Card
          className="m-2"
          bg={`${urgent && "danger"}`}
          text={`${urgent && "white"}`}
        >
          <Image variant="top" src={image} alt={title} fluid />
          <Card.Body>
            <Title color={urgent ? "white" : undefined}>{title}</Title>
            <Description>{description}</Description>
            <Details>Barrio: {zone}</Details>
            <Details>
              {mobility ? "Tiene movilidad" : "No tiene movilidad"}
            </Details>
          </Card.Body>
          <Card.Footer>
            <FooterContainer>
              <Details color={urgent ? "white" : undefined}>{user}</Details>
              {urgent && <Details color="white">URGENTE</Details>}
              <DropdownButton
                id="dropdown-item-button"
                variant="outline-dark"
                title="Contactar"
                size="sm"
              >
                <ContactButton
                  href={`https://wa.me/${phoneNumber}?text=${message}`}
                  target="blank"
                >
                  <Dropdown.Item as="button">Enviar Whatsapp</Dropdown.Item>
                </ContactButton>
              </DropdownButton>
            </FooterContainer>
          </Card.Footer>
        </Card>
      </Wrapper>
    </>
  );
}
export const Wrapper = styled.div({
  display: "flex",
  justifyContent: "center",
});
const Title = styled.h6({
  color: (props) => props.color,
  fontSize: "22px",
});
const Description = styled.h6({
  color: (props) => props.color,
  fontSize: "16px",
});
const Details = styled.p({
  color: (props) => props.color,
  fontSize: "11px",
});
const FooterContainer = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
const ContactButton = styled.a({
  ["&:hover"]: {
    color: "green",
  },
});
