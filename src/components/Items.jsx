import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/Navbar";
import { offeredItems, neededItems, myOffers, myNeeds } from "../data/data.js";
import TopBar from "./TopBar";
import Profile from "./Profile";
const ItemCard = lazy(() => import("./ItemCard"));

const Items = ({
  asChild = true,
  offers = false,
  needs = false,
  myoffers = false,
  myneeds = false,
}) => {
  return (
    <div>
      {!asChild && <TopBar />}
      {!asChild && <Profile />}
      <div className={`${asChild ? "App" : "App margin21-1"}`}>
        <Card border="primary" className="m-2">
          <Card.Header>
            <Link
              to={`${offers ? "/offers" : "/needed"}`}
              className="textDecoNone"
            >
              <h6 className="margin0">
                {needs
                  ? "Se busca"
                  : offers
                  ? "Se ofrece"
                  : myoffers
                  ? "Mis ofertas"
                  : myneeds && "Mis búsquedas"}
              </h6>
            </Link>
          </Card.Header>
          <CardColumns>
            <Suspense fallback="Cargando...">
              <div className="flexColumn">
                <div className="App">
                  {(offers
                    ? offeredItems
                    : needs
                    ? neededItems
                    : myoffers
                    ? myOffers
                    : myneeds && myNeeds
                  ).map((item, idx) => {
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
                </div>
                <div className="App">
                  {(offers ? offeredItems : neededItems).map((item, idx) => {
                    return (
                      !asChild &&
                      idx > 4 &&
                      idx < 10 && (
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
                </div>
              </div>
            </Suspense>
          </CardColumns>
        </Card>
      </div>
    </div>
  );
};

export default Items;
