import React from "react";
import TopBar from "../components/TopBar";
import Profile from "../components/Profile";
import Items from "../components/Items";

const Offers = ({ arrayToRender }) => {
  return (
    <>
      <TopBar />
      <Profile />
      <Items arrayToRender={arrayToRender} offers={true} />
    </>
  );
};

export default Offers;
