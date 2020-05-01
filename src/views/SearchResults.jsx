import React from "react";
import { searchInOffers, searchInNeeded } from "../data/apiInteraction.js";
import { useParams } from "react-router-dom";
import TopBar from "../components/TopBar";
import Profile from "../components/Profile";
import Items from "../components/Items";
import ItemsContainer from "../components/ItemsContainer";

const SearchResults = () => {
  let { keyword } = useParams();
  const OffersArrayToRender = searchInOffers(keyword, "title");
  const NeededArrayToRender = searchInNeeded(keyword, "title");
  return (
    keyword && (
      <div>
        <TopBar />
        <Profile />
        <div className="flex between margin21-1">
          <div className="width50pc">
            <ItemsContainer title="Resultados para Búsquedas">
              <Items arrayToRender={NeededArrayToRender} />
            </ItemsContainer>
          </div>
          <div className="width50pc">
            <ItemsContainer title="Resultados para Ofertas">
              <Items arrayToRender={OffersArrayToRender} />
            </ItemsContainer>
          </div>
        </div>
      </div>
    )
  );
};

export default SearchResults;
