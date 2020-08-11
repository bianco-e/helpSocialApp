import React, { lazy, Suspense, useState, useEffect } from "react";
import styled from "styled-components";
import Spinner from "react-bootstrap/Spinner";
const SmallItem = lazy(() => import("./SmallItem"));

export default function Items({ itemsToShow, collection, deleteItemFn }) {
  const [arrToRender, setArrToRender] = useState(itemsToShow);

  const deleteItemFromArray = (id) => {
    setArrToRender(
      arrToRender.filter((item) => {
        return item["id"] !== id;
      })
    );
  };

  useEffect(() => {
    setArrToRender(itemsToShow);
  }, [itemsToShow]);

  return (
    <Suspense
      fallback={
        <SpinnerDiv>
          <Spinner animation="grow" variant="primary" />
        </SpinnerDiv>
      }
    >
      <ItemsWrapper>
        <ItemContainer>
          {arrToRender.map(
            ({ category, description, id, image, title, urgent, user }) => {
              return (
                <SmallItem
                  category={category}
                  collection={collection}
                  deleteItemFn={deleteItemFn}
                  deleteItemFromArray={deleteItemFromArray}
                  description={description}
                  id={id}
                  image={image}
                  key={id}
                  title={title}
                  urgent={urgent}
                  user={user}
                />
              );
            }
          )}
        </ItemContainer>
      </ItemsWrapper>
    </Suspense>
  );
}

const SpinnerDiv = styled.section({
  width: "100%",
  textAlign: "center",
});
const ItemsWrapper = styled.section({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  padding: "1% 0",
  width: "100%",
});
const ItemContainer = styled.section({
  alignItems: "center",
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
});
