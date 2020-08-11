import React from "react";
import { useParams } from "react-router-dom";
import TopBar from "../components/TopBar";
import Profile from "../components/Profile";
import ItemsContainer from "../components/ItemsContainer";
import ContainersWrapper from "../components/ContainersWrapper";
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
      <>
        <TopBar />
        <Profile />
        <ContainersWrapper>
          <ItemsContainer
            title="Resultados para Búsquedas"
            itemsToShow={needsResults}
          />
          <ItemsContainer
            title="Resultados para Donaciones"
            itemsToShow={offersResults}
          />
        </ContainersWrapper>
      </>
    )
  );
}
