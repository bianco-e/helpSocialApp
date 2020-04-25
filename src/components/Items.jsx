import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/Navbar";
import Spinner from "react-bootstrap/Spinner";
import TopBar from "./TopBar";
import Profile from "./Profile";
const ItemCard = lazy(() => import("./ItemCard"));

const Items = ({
  asChild = true,
  arrayToRender,
  needed = false,
  offers = false,
  myneeds = false,
  myoffers = false,
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
                {needed
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
            <Suspense fallback={<Spinner animation="grow" variant="primary" />}>
              <div className="flexColumn">
                <div className="App flexWrap">
                  {arrayToRender.map((item, idx) => {
                    return (
                      <ItemCard
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        action={item.action}
                        user={item.user}
                        special={item.special}
                        id={item.id}
                        key={item.user + item.title}
                      />
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
