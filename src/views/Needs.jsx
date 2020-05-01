import React, { useEffect, useState } from "react";
import TopBar from "../components/TopBar";
import Profile from "../components/Profile";
import Items from "../components/Items";
import Filter from "../components/Filter";
import ItemsContainer from "../components/ItemsContainer";
import { getAllNeeds } from "../data/apiInteraction";

const Needs = () => {
  const [needsList, setNeedsList] = useState([]);

  const fetchOffers = async () => {
    setNeedsList(await getAllNeeds());
  };

  useEffect(() => {
    fetchOffers();
  }, []);

  const filterNeedsByCategory = (string) => {
    if (string === "ALL") {
      return fetchOffers();
    } else if (string === "Urgent") {
      return setNeedsList(
        needsList.filter((item) => {
          return item.urgent === true;
        })
      );
    } else {
      return setNeedsList(
        needsList.filter((item) => {
          return item.category === string;
        })
      );
    }
  };

  return (
    <>
      <TopBar />
      <Profile />
      <div className="margin21-1 flexStart left">
        <Filter filterFn={filterNeedsByCategory} urgFilter={true} />
        <ItemsContainer path="/needs" title="Búsquedas">
          <Items arrayToRender={needsList} />
        </ItemsContainer>
      </div>
    </>
  );
};

export default Needs;
