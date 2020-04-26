import React from "react";
import {
  firstnOfferedItems,
  firstnSortedNeededItems,
} from "../data/apiInteraction.js";
import TopBar from "../components/TopBar";
import Profile from "../components/Profile";
import Items from "../components/Items";

const Home = () => {
  const firstFiveNeeded = firstnSortedNeededItems(5);
  const firstFiveOffers = firstnOfferedItems(5);
  return (
    <div>
      <TopBar />
      <Profile />
      <div className="flexColumn">
        <Items arrayToRender={firstFiveNeeded} needed={true} />
        <Items arrayToRender={firstFiveOffers} offers={true} />
      </div>
    </div>
  );
};

export default Home;
