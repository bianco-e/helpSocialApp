import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import UrgentCheckBox from "./components/UrgentCheckBox";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./views/Login";
import Home from "./views/Home";
import Needs from "./views/Needs";
import Offers from "./views/Offers";
import MyOffers from "./views/MyOffers";
import MyNeeds from "./views/MyNeeds";
import AddItem from "./views/AddItem";
import ItemDetail from "./views/ItemDetail";
import SearchResults from "./views/SearchResults";
import {
  getOfferByID,
  getNeedByID,
  addNewNeed,
  addNewOffer,
  addAnImageToNeeds,
  addAnImageToOffers,
} from "./data/apiInteraction.js";

export default function Router() {
  return (
    <BrowserRouter>
      <Route exact path="/" render={() => <Login />} />
      <PrivateRoute exact path="/home" render={() => <Home />} />
      <PrivateRoute
        exact
        path="/search/:keyword"
        render={() => <SearchResults />}
      />
      <PrivateRoute
        exact
        path="/needs/:IDParam"
        render={() => <ItemDetail getItemByID={getNeedByID} />}
      />
      <PrivateRoute
        exact
        path="/offers/:IDParam"
        render={() => <ItemDetail getItemByID={getOfferByID} />}
      />
      <PrivateRoute exact path="/myoffers" render={() => <MyOffers />} />
      <PrivateRoute exact path="/myneeds" render={() => <MyNeeds />} />
      <PrivateRoute
        exact
        path="/addneed"
        render={() => (
          <AddItem addNewItem={addNewNeed} addAnImage={addAnImageToNeeds}>
            {(props) => <UrgentCheckBox {...props}></UrgentCheckBox>}
          </AddItem>
        )}
      />
      <PrivateRoute
        exact
        path="/addoffer"
        render={() => (
          <AddItem addNewItem={addNewOffer} addAnImage={addAnImageToOffers} />
        )}
      />
      <PrivateRoute exact path="/offers" render={() => <Offers />} />
      <PrivateRoute exact path="/needs" render={() => <Needs />} />
    </BrowserRouter>
  );
}
