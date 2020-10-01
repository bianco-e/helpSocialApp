import React, { Fragment, useContext, useState } from "react";
import styled from "styled-components";
import Media from "react-media";
import { logOutUsingGoogle } from "../data/apiInteraction.js";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import NavButton from "./NavButton";
import InputWithLabel from "./InputWithLabel";
import Logo from "./Logo";
import ProfileDropdown from "./ProfileDropdown";

export default function TopBar() {
  const history = useHistory();
  const [insertedValue, setInsertedValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const user = useContext(AuthContext);
  if (!user) return null;
  const { displayName, photoURL } = user;

  const dropdownButtons = [
    { title: "Mis donaciones", onClick: () => history.push("/myoffers") },
    { title: "Mis búsquedas", onClick: () => history.push("/myneeds") },
    {
      color: "#dc3545",
      title: "Cerrar sesión",
      onClick: () => logOutUsingGoogle(),
    },
  ];

  const handleSearch = (e) =>
    e.keyCode === 13 && history.push(`/search/${insertedValue}`);

  const handleProfileClick = () => setShowDropdown(!showDropdown);

  const buttons = [
    { endpoint: "/home", title: "Inicio" },
    { endpoint: "/needs", title: "Se busca" },
    { endpoint: "/offers", title: "Se dona" },
  ];

  return (
    <>
      <Media
        queries={{
          small: "(max-width: 550px)",
          medium: "(min-width: 551px) and (max-width: 760px)",
          large: "(min-width: 761px)",
        }}
      >
        {({ small, medium, large }) => (
          <Fragment>
            <Navbar bg="light" expand="lg" sticky="top">
              <Logo />
              <Nav className="mr-auto">
                <Wrapper>
                  {buttons.map(({ endpoint, title }) => (
                    <NavButton
                      onClick={() => history.push(endpoint)}
                      size={small && "sm"}
                      title={title}
                    />
                  ))}
                </Wrapper>
              </Nav>
              {!small && (
                <InputWithLabel
                  label="🔍"
                  placeholder="Búsqueda"
                  value={insertedValue}
                  onChange={(e) => setInsertedValue(e.target.value)}
                  onKeyDown={(e) => handleSearch(e)}
                  size={
                    medium
                      ? { h: "31px", w: "120px" }
                      : { h: "38px", w: undefined }
                  }
                />
              )}
              {large && (
                <Button
                  variant="danger"
                  size={medium ? "sm" : undefined}
                  onClick={() => logOutUsingGoogle()}
                >
                  Cerrar sesión
                </Button>
              )}
              {!large && (
                <Container>
                  <ProfileImage
                    alt={displayName}
                    src={photoURL}
                    onClick={() => handleProfileClick()}
                  />
                  {showDropdown && (
                    <ProfileDropdown buttons={dropdownButtons} />
                  )}
                </Container>
              )}
            </Navbar>
          </Fragment>
        )}
      </Media>
    </>
  );
}

const Wrapper = styled.section({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
const Container = styled.div({
  position: "relative",
});
const ProfileImage = styled.img({
  borderRadius: "50%",
  cursor: "pointer",
  height: "40px",
  width: "40px",
});
