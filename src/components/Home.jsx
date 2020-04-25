import React from "react";
import { offeredItems, neededItems } from "../data/data.js";
import { firstnItems, sortBySpecialProp } from "../data/apiInteraction.js";
import TopBar from "./TopBar";
import Profile from "./Profile";
import Items from "./Items";

const Home = () => {
  const firstFiveNeeded = firstnItems(sortBySpecialProp(neededItems), 5);
  const firstFiveOffers = firstnItems(offeredItems, 5);
  return (
    <div>
      <TopBar />
      <Profile />
      <div className="App margin21-1">
        <div className="flexColumn">
          <Items arrayToRender={firstFiveNeeded} needed={true} />
          <Items arrayToRender={firstFiveOffers} offers={true} />
        </div>
      </div>
    </div>
  );
};

export default Home;
