import React, { lazy, Suspense } from "react";
import { offeredItems, neededItems } from "../data/data.js";
import { firstnItems } from "../data/apiInteraction.js";
import TopBar from "./TopBar";
import Profile from "./Profile";
import Spinner from "react-bootstrap/Spinner";
const Items = lazy(() => import("./Items"));

const Home = () => {
  const firstFiveNeeded = firstnItems(neededItems, 5);
  const firstFiveOffers = firstnItems(offeredItems, 5);

  return (
    <div>
      <TopBar />
      <Profile />
      <div className="App margin21-1">
        <div className="flexColumn">
          <Suspense fallback={<Spinner animation="grow" variant="primary" />}>
            <Items arrayToRender={firstFiveNeeded} needed={true} />
          </Suspense>
          <Suspense fallback={<Spinner animation="grow" variant="primary" />}>
            <Items arrayToRender={firstFiveOffers} offers={true} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Home;
