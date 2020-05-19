import React from "react";
import {
  DivFlexStartLeft,
  DivHundredPerCentWidth,
} from "../components/StyledComponents";
import TopBar from "../components/TopBar";
import Profile from "../components/Profile";
import Items from "../components/Items";
import Filter from "../components/Filter";
import ItemsContainer from "../components/ItemsContainer";
import useFetchWithFilter from "../hooks/useFetchWithFilter.js";
import { getAllNeeds } from "../data/apiInteraction";

const Needs = () => {
  const [needsList, setNeedsList, allNeeds, refetchData] = useFetchWithFilter(
    getAllNeeds
  );

  const filterNeedsByCategory = (string) => {
    if (string === "ALL") {
      return refetchData();
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
      <DivFlexStartLeft>
        <Filter filterFn={filterNeedsByCategory} urgFilter={true} />
        <DivHundredPerCentWidth>
          <ItemsContainer path="/needs" title="Búsquedas">
            <Items arrayToRender={needsList} collection={"needs"} />
          </ItemsContainer>
        </DivHundredPerCentWidth>
      </DivFlexStartLeft>
    </>
  );
};

export default Needs;
