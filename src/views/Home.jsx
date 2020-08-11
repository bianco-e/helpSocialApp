import React from "react";
import styled from "styled-components";

import TopBar from "../components/TopBar";
import Profile from "../components/Profile";
import ContainersWrapper from "../components/ContainersWrapper";
import ItemsContainer from "../components/ItemsContainer";

import useFetchWithFilter from "../hooks/useFetchWithFilter.js";
import { getFiveOffers, getFiveNeeds } from "../data/apiInteraction.js";

export default function Home() {
  const [fiveOffersList] = useFetchWithFilter(getFiveOffers);
  const [fiveNeedsList] = useFetchWithFilter(getFiveNeeds);

  return (
    <>
      <TopBar />
      <Profile />
      <ContainersWrapper>
        <ItemsContainer
          collection={"needs"}
          itemsToShow={fiveNeedsList}
          title="Búsquedas destacadas"
        />
        <ItemsContainer
          collection={"offers"}
          itemsToShow={fiveOffersList}
          title="Donaciones destacadas"
        />
      </ContainersWrapper>
    </>
  );
}
