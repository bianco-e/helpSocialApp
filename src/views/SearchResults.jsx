import React from "react";
import { useParams } from "react-router-dom";
import TopBar from "../components/TopBar";
import Profile from "../components/Profile";
import Items from "../components/Items";
import ItemsContainer from "../components/ItemsContainer";

const SearchResults = () => {
  const searchInNeeded = (keyword) => {
    return [].filter((item) => {
      return item.title.toLowerCase().includes(keyword.toLowerCase());
    });
  };
  const searchInOffers = (keyword) => {
    return [].filter((item) => {
      return item.title.toLowerCase().includes(keyword.toLowerCase());
    });
  };
  let { keyword } = useParams();
  const OffersArrayToRender = searchInOffers(keyword);
  const NeededArrayToRender = searchInNeeded(keyword);
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
