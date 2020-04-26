import React from "react";
import { searchInOffers, searchInNeeded } from "../data/apiInteraction.js";
import { useParams } from "react-router-dom";
import TopBar from "../components/TopBar";
import Profile from "../components/Profile";
import Items from "../components/Items";

const SearchResults = () => {
  let { keyword } = useParams();
  const OffersArrayToRender = searchInOffers(keyword, "title");
  const NeededArrayToRender = searchInNeeded(keyword, "title");
  return (
    keyword && (
      <div>
        <TopBar />
        <Profile />
        <Items
          arrayToRender={NeededArrayToRender}
          needed={true}
          search={true}
        />
        <Items
          arrayToRender={OffersArrayToRender}
          offers={true}
          search={true}
        />
      </div>
    )
  );
};

export default SearchResults;
