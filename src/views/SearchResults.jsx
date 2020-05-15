import React from "react";
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
        <div className="flex between margin21-1">
          <div className="width50pc">
            <ItemsContainer title="Resultados para Búsquedas">
              <Items arrayToRender={needsResults} />
            </ItemsContainer>
          </div>
          <div className="width50pc">
            <ItemsContainer title="Resultados para Donaciones">
              <Items arrayToRender={offersResults} />
            </ItemsContainer>
          </div>
        </div>
      </div>
    )
  );
};

export default SearchResults;
