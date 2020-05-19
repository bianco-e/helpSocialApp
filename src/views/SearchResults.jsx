import React from "react";
import {
  TwoDivsWrapper,
  DivFiftyPerCentWidth,
} from "../components/StyledComponents";
import { useParams } from "react-router-dom";
import TopBar from "../components/TopBar";
import Profile from "../components/Profile";
import Items from "../components/Items";
import ItemsContainer from "../components/ItemsContainer";
import useFetchWithFilter from "../hooks/useFetchWithFilter.js";
import {
  searchByTitleInOffers,
  searchByTitleInNeeds,
} from "../data/apiInteraction.js";

const SearchResults = () => {
  let { keyword } = useParams();

  const [needsResults] = useFetchWithFilter(() =>
    searchByTitleInNeeds(keyword)
  );
  const [offersResults] = useFetchWithFilter(() =>
    searchByTitleInOffers(keyword)
  );
  return (
    keyword && (
      <div>
        <TopBar />
        <Profile />
        <TwoDivsWrapper>
          <DivFiftyPerCentWidth>
            <ItemsContainer title="Resultados para Búsquedas">
              <Items arrayToRender={needsResults} />
            </ItemsContainer>
          </DivFiftyPerCentWidth>
          <DivFiftyPerCentWidth>
            <ItemsContainer title="Resultados para Donaciones">
              <Items arrayToRender={offersResults} />
            </ItemsContainer>
          </DivFiftyPerCentWidth>
        </TwoDivsWrapper>
      </div>
    )
  );
};

export default SearchResults;
