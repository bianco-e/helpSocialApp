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

  const containers = [
    {
      title: "Búsquedas",
      itemsToShow: needsResults,
    },
    {
      title: "Donaciones",
      itemsToShow: offersResults,
    },
  ];

  return (
    <>
      <TopBar />
      <Profile />
      {keyword && (
        <ContainersWrapper>
          {containers.map(({ title, itemsToShow }) => {
            return <ItemsContainer title={title} itemsToShow={itemsToShow} />;
          })}
        </ContainersWrapper>
      )}
    </>
  );
}
