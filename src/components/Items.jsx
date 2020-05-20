import React, { lazy, Suspense, useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
const SmallItem = lazy(() => import("./SmallItem"));

const Items = ({ arrayToRender, collection, deleteItemFn }) => {
  const [arrToRender, setArrToRender] = useState(arrayToRender);

  const deleteItemFromArray = (id) => {
    setArrToRender(
      arrToRender.filter((item) => {
        return item["id"] !== id;
      })
    );
  };

  useEffect(() => {
    setArrToRender(arrayToRender);
  }, [arrayToRender]);

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
          {arrToRender.map((item) => {
            return (
              <SmallItem
                category={item.category}
                collection={collection}
                deleteItemFn={deleteItemFn}
                deleteItemFromArray={deleteItemFromArray}
                description={item.description}
                id={item.id}
                image={item.image}
                key={item.id}
                title={item.title}
                urgent={item.urgent}
                user={item.user}
              />
            );
          })}
        </div>
      </div>
    </Suspense>
  );
};

export default Items;
