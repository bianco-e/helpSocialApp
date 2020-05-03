import React, { useEffect, useState } from "react";
import TopBar from "../components/TopBar";
import Profile from "../components/Profile";
import Items from "../components/Items";
import Filter from "../components/Filter";
import ItemsContainer from "../components/ItemsContainer";
import { getAllNeeds } from "../data/apiInteraction";

const Needs = () => {
  const [needsList, setNeedsList] = useState([]);
  const [allNeeds, setAllNeeds] = useState([]);

  const fetchNeeds = async () => {
    setAllNeeds(await getAllNeeds());
  };
  console.log(allNeeds.map((need) => need.id));

  useEffect(() => {
    fetchNeeds();
  }, []);
  useEffect(() => {
    setNeedsList(allNeeds);
  }, [allNeeds]);

  const filterNeedsByCategory = (string) => {
    if (string === "ALL") {
      return fetchNeeds();
    } else if (string === "Urgent") {
      return setNeedsList(
        needsList.filter((item) => {
          return item.urgent === true;
        })
      );
    } else {
      return setNeedsList(
        allNeeds.filter((item) => {
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
        <div className="width100pc">
          <ItemsContainer path="/needs" title="Búsquedas">
            <Items arrayToRender={needsList} />
          </ItemsContainer>
        </div>
      </div>
    </>
  );
};

export default Needs;
