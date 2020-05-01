import React, { lazy, Suspense } from "react";
import Spinner from "react-bootstrap/Spinner";
const SmallItem = lazy(() => import("./SmallItem"));

const Items = ({ arrayToRender }) => {
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
                image={item.image}
                title={item.title}
                description={item.description}
                user={item.user}
                urgent={item.urgent}
                category={item.category}
                key={item.user + item.title}
              />
            );
          })}
        </div>
      </div>
    </Suspense>
  );
};

export default Items;
