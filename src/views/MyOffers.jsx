import React, { useContext } from "react";
import {
  DivFlexStartLeft,
  DivHundredPerCentWidth,
  DivSpinner,
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
import { getAllMyOffers, deleteOffer } from "../data/apiInteraction.js";

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
    <>
      <TopBar />
      <Profile />
      <DivFlexStartLeft>
        <Filter filterFn={filterOffersByCategory} />
        <DivHundredPerCentWidth>
          <ItemsContainer path="/myoffers" title="Mis donaciones">
            <Items
              arrayToRender={myOffersList}
              collection={"offers"}
              deleteItemFn={deleteOffer}
            />
          </ItemsContainer>
        </DivHundredPerCentWidth>
      </DivFlexStartLeft>
      <DivFlexStartLeft>
        <DivHundredPerCentWidth>
          <Link to="/addoffer">
            <Button variant="outline-info">Agregar donación</Button>
          </Link>
        </DivHundredPerCentWidth>
      </DivFlexStartLeft>
    </>
  );
};

export default MyOptions;
