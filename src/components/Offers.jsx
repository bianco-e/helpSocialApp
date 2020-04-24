import React, { lazy, Suspense } from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/Navbar";
import TopBar from "./TopBar";
import Profile from "./Profile";
import { offeredItems } from "../data/data.js";
const ItemCard = lazy(() => import("./ItemCard"));

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
            <Suspense fallback="Cargando...">
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
            </Suspense>
          </CardColumns>
        </Card>
      </div>
    </div>
  );
};

export default Offers;
