import React from "react";
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
      <div className="flex between margin21-1">
        <div className="width50pc">
          <ItemsContainer title="Búsquedas destacadas">
            <Items arrayToRender={fiveNeedsList} needed={true} />
          </ItemsContainer>
        </div>
        <div className="width50pc">
          <ItemsContainer title="Ofertas destacadas">
            <Items arrayToRender={fiveOffersList} offers={true} />
          </ItemsContainer>
        </div>
      </div>
    </div>
  );
};

export default Home;
