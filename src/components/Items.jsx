import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/Navbar";
import Spinner from "react-bootstrap/Spinner";
const SmallItem = lazy(() => import("./SmallItem"));

const Items = ({
  arrayToRender,
  needed = false,
  offers = false,
  myneeds = false,
  myoffers = false,
  search = false,
}) => {
  return (
    <div>
      <div className="flex around">
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
            <Suspense
              fallback={
                <div className="spinnerDiv">
                  <Spinner animation="grow" variant="primary" />
                </div>
              }
            >
              <div className="flexColumn">
                <div className="flex around flexWrap">
                  {search && arrayToRender.length === 0
                    ? "No se encontraron elementos"
                    : arrayToRender.map((item) => {
                        return (
                          <SmallItem
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
