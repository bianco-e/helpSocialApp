import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Profile from "../components/Profile";
import TopBar from "../components/TopBar";
import Filter from "../components/Filter";
import ItemsContainer from "../components/ItemsContainer";
import ContainersWrapper from "../components/ContainersWrapper";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import useFetchWithFilter from "../hooks/useFetchWithFilter.js";
import { getAllMyNeeds, deleteNeed } from "../data/apiInteraction.js";

export default function MyNeeds() {
  const user = useContext(AuthContext);
  const userEmail = user.email || "";

  const [
    myNeedsList,
    setMyNeedsList,
    allMyNeeds,
    refetchData,
  ] = useFetchWithFilter(() => getAllMyNeeds(userEmail));

  const filterNeedsByCategory = (string) => {
    if (string === "ALL") {
      return refetchData();
    } else if (string === "Urgent") {
      return setMyNeedsList(
        myNeedsList.filter((item) => {
          return item.urgent === true;
        })
      );
    } else {
      return setMyNeedsList(
        allMyNeeds.filter((item) => {
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
          deleteItemFn={deleteNeed}
          itemsToShow={myNeedsList}
          title="Mis búsquedas"
          width="100%"
        />
      </ContainersWrapper>
      <ContainersWrapper>
        <Link to="/addneed">
          <Button variant="outline-info">Agregar búsqueda</Button>
        </Link>
      </ContainersWrapper>
    </>
  );
}
