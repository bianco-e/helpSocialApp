import React from "react";
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
      <div className="margin21-1 flexStart left">
        <Filter filterFn={filterOffersByCategory} />
        <div className="width100pc">
          <ItemsContainer path="/offers" title="Ofertas">
            <Items arrayToRender={offersList} />
          </ItemsContainer>
        </div>
      </div>
    </>
  );
};

export default Offers;
