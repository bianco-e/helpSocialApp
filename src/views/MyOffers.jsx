import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Profile from "../components/Profile";
import TopBar from "../components/TopBar";
import Filter from "../components/Filter";
import ItemsContainer from "../components/ItemsContainer";
import ContainersWrapper from "../components/ContainersWrapper";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import useFetchWithFilter from "../hooks/useFetchWithFilter.js";
import { getAllMyOffers, deleteOffer } from "../data/apiInteraction.js";

export default function MyOptions() {
  const user = useContext(AuthContext);
  const userEmail = user.email || "";

  const [
    myOffersList,
    setMyOffersList,
    allMyOffers,
    refetchData,
  ] = useFetchWithFilter(() => getAllMyOffers(userEmail));

  const filterOffersByCategory = (string) => {
    if (string === "ALL") {
      return refetchData();
    } else {
      return setMyOffersList(
        allMyOffers.filter((item) => {
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
          deleteItemFn={deleteOffer}
          itemsToShow={myOffersList}
          title="Mis donaciones"
          width="100%"
        />
      </ContainersWrapper>
      <ContainersWrapper>
        <Link to="/addoffer">
          <Button variant="outline-info">Agregar donación</Button>
        </Link>
      </ContainersWrapper>
    </>
  );
}
