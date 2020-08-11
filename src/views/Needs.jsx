import React from "react";
import TopBar from "../components/TopBar";
import Profile from "../components/Profile";
import Filter from "../components/Filter";
import ItemsContainer from "../components/ItemsContainer";
import ContainersWrapper from "../components/ContainersWrapper";
import useFetchWithFilter from "../hooks/useFetchWithFilter.js";
import { getAllNeeds } from "../data/apiInteraction";

export default function Needs() {
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
      <ContainersWrapper>
        <Filter filterFn={filterNeedsByCategory} urgFilter={true} />
        <ItemsContainer
          collection={"needs"}
          itemsToShow={needsList}
          title="Búsquedas"
          width="100%"
        />
      </ContainersWrapper>
    </>
  );
}
