import React, { lazy, Suspense } from "react";
import Spinner from "react-bootstrap/Spinner";
const SmallItem = lazy(() => import("./SmallItem"));

const Items = ({ arrayToRender }) => {
  const findItemById = (itemID) => {
    return arrayToRender.find((item) => {
      return item.id === itemID;
    });
  };

  return (
    <Suspense
      fallback={
        <div className="spinnerDiv">
          <Spinner animation="grow" variant="primary" />
        </div>
      }
    >
      <div className="flexColumn padding2pc">
        <div className="flex around flexWrap">
          {arrayToRender.map((item) => {
            return (
              <SmallItem
                category={item.category}
                description={item.description}
                id={item.id}
                image={item.image}
                key={item.user + item.title}
                title={item.title}
                urgent={item.urgent}
                user={item.user}
                findItemById={findItemById}
              />
            );
          })}
        </div>
      </div>
    </Suspense>
  );
};

export default Items;
