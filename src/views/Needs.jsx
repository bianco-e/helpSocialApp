import React from "react";
import TopBar from "../components/TopBar";
import Profile from "../components/Profile";
import Items from "../components/Items";

const Needs = ({ arrayToRender }) => {
  return (
    <>
      <TopBar />
      <Profile />
      <Items arrayToRender={arrayToRender} needed={true} />
    </>
  );
};

export default Needs;
