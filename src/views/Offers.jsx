import React, { useState, useEffect } from "react";
import TopBar from "../components/TopBar";
import Profile from "../components/Profile";
import Items from "../components/Items";
import ItemsContainer from "../components/ItemsContainer";
import Filter from "../components/Filter";
import { getAllOffers } from "../data/apiInteraction.js";

const Offers = () => {
  const [offersList, setOffersList] = useState([]);
  const [allOffers, setAllOffers] = useState([]);

  const fetchOffers = async () => {
    setAllOffers(await getAllOffers());
  };

  useEffect(() => {
    fetchOffers();
  }, []);
  useEffect(() => {
    setOffersList(allOffers);
  }, [allOffers]);

  const filterOffersByCategory = (string) => {
    if (string === "ALL") {
      return fetchOffers();
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
