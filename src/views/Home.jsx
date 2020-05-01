import React from "react";
import {} from "../data/apiInteraction.js";
import TopBar from "../components/TopBar";
import Profile from "../components/Profile";
import Items from "../components/Items";
import ItemsContainer from "../components/ItemsContainer";

const Home = () => {
  return (
    <div>
      <TopBar />
      <Profile />
      <div className="flex between margin21-1">
        <div className="width50pc">
          <ItemsContainer title="Búsquedas destacadas">
            <Items arrayToRender={[]} needed={true} />
          </ItemsContainer>
        </div>
        <div className="width50pc">
          <ItemsContainer title="Ofertas destacadas">
            <Items arrayToRender={[]} offers={true} />
          </ItemsContainer>
        </div>
      </div>
    </div>
  );
};

export default Home;
