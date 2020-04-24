import React from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/Navbar";
import TopBar from "./TopBar";
import Profile from "./Profile";
import ItemCard from "./ItemCard";
import { offeredItems } from "../data/data.js";

const Offers = ({ topBar, profile }) => {
  return (
    <div>
      {topBar && <TopBar />}
      <div className="App">
        {profile && <Profile />}
        <Card border="primary" className="m-2">
          <Card.Header as="h5" bg="info" text="white">
            Se ofrece
          </Card.Header>
          <CardColumns>
            {offeredItems.map((item, idx) => {
              return (
                idx < 5 && (
                  <ItemCard
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    action={item.action}
                    user={item.user}
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

export default Offers;
