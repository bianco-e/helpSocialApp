import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Profile from "../components/Profile";
import TopBar from "../components/TopBar";
import Items from "../components/Items";
import Filter from "../components/Filter";
import ItemsContainer from "../components/ItemsContainer";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import useFetchWithFilter from "../hooks/useFetchWithFilter.js";
import { getAllMyNeeds } from "../data/apiInteraction.js";

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
    <div>
      <TopBar />
      <Profile />
      <div className="margin21-1 flexStart left">
        <Filter filterFn={filterNeedsByCategory} urgFilter={true} />
        <div className="width100pc">
          <ItemsContainer path="/myneeds" title="Mis búsquedas">
            <Items arrayToRender={myNeedsList} collection={"needs"} />
          </ItemsContainer>
        </div>
      </div>
      <div className="spinnerDiv">
        <Link to="/addneed">
          <Button variant="outline-info">Agregar búsqueda</Button>
        </Link>
      </div>
    </div>
  );
};

export default MyNeeds;
