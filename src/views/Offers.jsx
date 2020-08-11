import React from "react";
import TopBar from "../components/TopBar";
import Profile from "../components/Profile";
import ItemsContainer from "../components/ItemsContainer";
import Filter from "../components/Filter";
import ContainersWrapper from "../components/ContainersWrapper";

import useFetchWithFilter from "../hooks/useFetchWithFilter.js";
import { getAllOffers } from "../data/apiInteraction.js";

export default function Offers() {
  const [
    offersList,
    setOffersList,
    allOffers,
    refetchData,
  ] = useFetchWithFilter(getAllOffers);

  const filterOffersByCategory = (string) => {
    if (string === "ALL") {
      return refetchData();
    } else {
      return setOffersList(
        allOffers.filter((item) => {
          return item.category === string;
        })
      );
    }
  };

  return (
    <>
      <TopBar />
      <Profile />
      <ContainersWrapper>
        <Filter filterFn={filterOffersByCategory} />
        <ItemsContainer
          collection={"offers"}
          itemsToShow={offersList}
          title="Donaciones"
          width="100%"
        />
      </ContainersWrapper>
    </>
  );
}
