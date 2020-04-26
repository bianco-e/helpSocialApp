import React from "react";
import TopBar from "../components/TopBar";
import Profile from "../components/Profile";
import Items from "../components/Items";

const Needs = ({ arrayToRender }) => {
  return (
    <>
      <TopBar />
      <Profile />
      <div className="margin21-1">
        <Items arrayToRender={arrayToRender} needed={true} />
      </div>
    </>
  );
};

export default Needs;
