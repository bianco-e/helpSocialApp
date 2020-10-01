import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import TopBar from "../components/TopBar";
import Profile from "../components/Profile";
import { setMessage } from "../data/data";

const style = {
  urgent: {
    bg: "danger",
    color: "white",
  },
  regular: {
    bg: undefined,
    color: undefined,
  },
};

export default function ItemDetail({ getItemByID }) {
  let { IDParam } = useParams();
  const [itemData, setItemData] = useState("");

  const getItemByIDParam = async (IDParam) => {
    setItemData(await getItemByID(IDParam));
  };

  useEffect(() => {
    getItemByIDParam(IDParam);
  }, []);

  const { description, image, mobility, urgent, title, user, zone } = itemData;
  const type = urgent ? "urgent" : "regular";
  const phoneNumber = +5493416822;
  return (
    <>
      <TopBar />
      <Profile />
      <Wrapper>
        <Card className="m-2" bg={style[type].bg} text={style[type].color}>
          <Image variant="top" src={image} alt={title} fluid />
          <Card.Body>
            <Title color={style[type].color}>{title}</Title>
            <Description>{description}</Description>
            <Details>Barrio: {zone}</Details>
            <Details>
              {mobility ? "Tiene movilidad" : "No tiene movilidad"}
            </Details>
          </Card.Body>
          <Card.Footer>
            <FooterContainer>
              <Details color={style[type].color}>{user}</Details>
              {urgent && <Details color="white">URGENTE</Details>}
              <ContactButton
                href={`https://wa.me/${phoneNumber}?text=${setMessage(title)}`}
                target="blank"
              >
                Enviar Whatsapp
              </ContactButton>
            </FooterContainer>
          </Card.Footer>
        </Card>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div({
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
  background: "#FFF",
  border: "1px solid green",
  borderRadius: "5px",
  color: "green",
  padding: "3px 8px",
  textDecoration: "none",
  transition: "all .4s ease",
  ["&:hover"]: {
    color: "#25D366",
    textDecoration: "none",
  },
});
