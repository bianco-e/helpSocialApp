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
import { getAllMyOffers } from "../data/apiInteraction.js";

const MyOptions = () => {
  const user = useContext(AuthContext);
  const userEmail = user.email || "";

  const [
    myOffersList,
    setMyOffersList,
    allMyOffers,
    refetchData,
  ] = useFetchWithFilter(() => getAllMyOffers(userEmail));

  const filterOffersByCategory = (string) => {
    if (string === "ALL") {
      return refetchData();
    } else {
      return setMyOffersList(
        allMyOffers.filter((item) => {
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
        <Filter filterFn={filterOffersByCategory} />
        <div className="width100pc">
          <ItemsContainer path="/myoffers" title="Mis donaciones">
            <Items arrayToRender={myOffersList} />
          </ItemsContainer>
        </div>
      </div>
      <div className="spinnerDiv">
        <Link to="/addoffer">
          <Button variant="outline-info">Agregar donación</Button>
        </Link>
      </div>
    </div>
  );
};

export default MyOptions;
