import React from "react";
import { NeedsAndOffersWrapper } from "../components/StyledComponents";
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

export default function SearchResults() {
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
        <NeedsAndOffersWrapper>
          <ItemsContainer title="Resultados para Búsquedas">
            <Items arrayToRender={needsResults} />
          </ItemsContainer>
          <ItemsContainer title="Resultados para Donaciones">
            <Items arrayToRender={offersResults} />
          </ItemsContainer>
        </NeedsAndOffersWrapper>
      </div>
    )
  );
}
