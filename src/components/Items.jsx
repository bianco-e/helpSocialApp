import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/Navbar";
import { offeredItems, neededItems } from "../data/data.js";
import TopBar from "./TopBar";
import Profile from "./Profile";
const ItemCard = lazy(() => import("./ItemCard"));

const Items = ({ forHome, offers = false, needs = false }) => {
  return (
    <div>
      {!forHome && <TopBar />}
      {!forHome && <Profile />}
      <div className={`${forHome ? "App" : "App marginLeft"}`}>
        <Card border="primary" className="m-2">
          <Link to="/needed">
            <Card.Header as="h6">
              {needs ? "Se busca" : offers && "Se ofrece"}
            </Card.Header>
          </Link>
          <CardColumns>
            <Suspense fallback="Cargando...">
              {(offers ? offeredItems : neededItems).map((item, idx) => {
                return (
                  idx < (!forHome ? 10 : 5) && (
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
            </Suspense>
          </CardColumns>
        </Card>
      </div>
    </div>
  );
};

export default Items;
