import React from "react";
import styled from "styled-components";
import { NeedsAndOffersWrapper } from "../components/StyledComponents";
import TopBar from "../components/TopBar";
import Profile from "../components/Profile";
import Items from "../components/Items";
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
      <NeedsAndOffersWrapper>
        <ItemsContainer title="Búsquedas destacadas">
          <Items arrayToRender={fiveNeedsList} collection={"needs"} />
        </ItemsContainer>
        <ItemsContainer title="Donaciones destacadas">
          <Items arrayToRender={fiveOffersList} collection={"offers"} />
        </ItemsContainer>
      </NeedsAndOffersWrapper>
    </>
  );
}
