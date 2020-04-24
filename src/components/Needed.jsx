import React, { lazy, Suspense } from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/Navbar";
import TopBar from "./TopBar";
import Profile from "./Profile";
import { neededItems } from "../data/data.js";
const ItemCard = lazy(() => import("./ItemCard"));

const Needed = ({ topBar, profile }) => {
  /* const sortedNeededItems = neededItems.sort(
    (a, b) => (a.special === false) - (b.special === true)
  ); */
  return (
    <div>
      {topBar && <TopBar />}
      <div className="App">
        {profile && <Profile />}
        <Card border="primary" className="m-2">
          <Card.Header as="h5">Se busca</Card.Header>
          <CardColumns>
            {neededItems.map((item, idx) => {
              return (
                idx < 5 && (
                  <ItemCard
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    action={item.action}
                    user={item.user}
                    special={item.special}
                    key={item.user + item.title}
                  />
                )
              );
            })}
          </CardColumns>
        </Card>
      </div>
    </div>
  );
};

export default Needed;
