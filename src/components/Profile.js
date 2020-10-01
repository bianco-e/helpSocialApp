import React, { Fragment, useContext } from "react";
import styled from "styled-components";
import Media from "react-media";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

export default function Profile() {
  const user = useContext(AuthContext);
  if (!user) return null;
  const userName = user.displayName;
  const userPhoto = user.photoURL;

  return (
    <>
      <Media
        queries={{
          small: "(max-width: 550px)",
          medium: "(min-width: 551px) and (max-width: 760px)",
        }}
      >
        {({ small, medium }) => (
          <Fragment>
            {!small && !medium && (
              <Card bsPrefix="profileDiv" variant="position">
                <Image
                  variant="top"
                  src={userPhoto}
                  className="profileImage"
                  alt={userName}
                  roundedCircle
                  fluid
                />
                <Card.Body>
                  <ProfileWrapper className="flexColumn">
                    <UserName>{userName}</UserName>
                    <Link to="/myoffers">
                      <ProfileButton>Mis donaciones</ProfileButton>
                    </Link>
                    <Link to="/myneeds">
                      <ProfileButton>Mis búsquedas</ProfileButton>
                    </Link>
                  </ProfileWrapper>
                </Card.Body>
              </Card>
            )}
          </Fragment>
        )}
      </Media>
    </>
  );
}

const ProfileWrapper = styled.div({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
});
const ProfileButton = styled.button({
  background: "none",
  border: "1px solid black",
  borderRadius: "0.25rem",
  color: "black",
  marginBottom: "10%",
  padding: "3px 8px",
  width: "100%",
  transition: "background-color .2s ease",
  ["&:hover"]: {
    color: "white",
    backgroundColor: "black",
  },
});
const UserName = styled.h6({
  paddingBottom: "80%",
});
