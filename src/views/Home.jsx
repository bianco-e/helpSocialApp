import React from "react";
import {
  TwoDivsWrapper,
  DivFiftyPerCentWidth,
} from "../components/StyledComponents";
import TopBar from "../components/TopBar";
import Profile from "../components/Profile";
import Items from "../components/Items";
import ItemsContainer from "../components/ItemsContainer";
import useFetchWithFilter from "../hooks/useFetchWithFilter.js";
import { getFiveOffers, getFiveNeeds } from "../data/apiInteraction.js";

const Home = () => {
  const [fiveOffersList] = useFetchWithFilter(getFiveOffers);
  const [fiveNeedsList] = useFetchWithFilter(getFiveNeeds);

  return (
    <div>
      <TopBar />
      <Profile />
      <TwoDivsWrapper>
        <DivFiftyPerCentWidth>
          <ItemsContainer title="Búsquedas destacadas">
            <Items arrayToRender={fiveNeedsList} collection={"needs"} />
          </ItemsContainer>
        </DivFiftyPerCentWidth>
        <DivFiftyPerCentWidth>
          <ItemsContainer title="Donaciones destacadas">
            <Items arrayToRender={fiveOffersList} collection={"offers"} />
          </ItemsContainer>
        </DivFiftyPerCentWidth>
      </TwoDivsWrapper>
    </div>
  );
};

export default Home;
