import React, { useContext } from "react";
import {
  DivFlexStartLeft,
  DivHundredPerCentWidth,
} from "../components/StyledComponents";
import AuthContext from "../context/AuthContext";
import Profile from "../components/Profile";
import TopBar from "../components/TopBar";
import Items from "../components/Items";
import Filter from "../components/Filter";
import ItemsContainer from "../components/ItemsContainer";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import useFetchWithFilter from "../hooks/useFetchWithFilter.js";
import { getAllMyNeeds, deleteNeed } from "../data/apiInteraction.js";

const MyNeeds = () => {
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
      <DivFlexStartLeft>
        <Filter filterFn={filterNeedsByCategory} urgFilter={true} />
        <DivHundredPerCentWidth>
          <ItemsContainer width="100%" title="Mis búsquedas">
            <Items
              arrayToRender={myNeedsList}
              collection={"needs"}
              deleteItemFn={deleteNeed}
            />
          </ItemsContainer>
        </DivHundredPerCentWidth>
      </DivFlexStartLeft>
      <DivFlexStartLeft>
        <DivHundredPerCentWidth>
          <Link to="/addneed">
            <Button variant="outline-info">Agregar búsqueda</Button>
          </Link>
        </DivHundredPerCentWidth>
      </DivFlexStartLeft>
    </>
  );
};

export default MyNeeds;
