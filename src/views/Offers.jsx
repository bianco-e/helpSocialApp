import React from "react";
import {
  DivFlexStartLeft,
  DivHundredPerCentWidth,
} from "../components/StyledComponents";
import TopBar from "../components/TopBar";
import Profile from "../components/Profile";
import Items from "../components/Items";
import ItemsContainer from "../components/ItemsContainer";
import Filter from "../components/Filter";
import useFetchWithFilter from "../hooks/useFetchWithFilter.js";
import { getAllOffers } from "../data/apiInteraction.js";

const Offers = () => {
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
      <DivFlexStartLeft>
        <Filter filterFn={filterOffersByCategory} />
        <DivHundredPerCentWidth>
          <ItemsContainer path="/offers" title="Donaciones">
            <Items arrayToRender={offersList} collection={"offers"} />
          </ItemsContainer>
        </DivHundredPerCentWidth>
      </DivFlexStartLeft>
    </>
  );
};

export default Offers;
