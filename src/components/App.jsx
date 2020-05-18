import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "../views/Login";
import Home from "../views/Home";
import Needs from "../views/Needs";
import Offers from "../views/Offers";
import MyOffers from "../views/MyOffers";
import MyNeeds from "../views/MyNeeds";
import AddOffer from "../views/AddOffer";
import AddNeed from "../views/AddNeed";
import PrivateRoute from "./PrivateRoute";
import ItemDetail from "../views/ItemDetail";
import SearchResults from "../views/SearchResults";
import { getOfferByID, getNeedByID } from "../data/apiInteraction.js";

function App() {
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
        render={() => (
          <ItemDetail getItemByID={getNeedByID} messageWord={"Tengo"} />
        )}
      />
      <PrivateRoute
        exact
        path="/offers/:IDParam"
        render={() => (
          <ItemDetail getItemByID={getOfferByID} messageWord={"Necesito"} />
        )}
      />
      <PrivateRoute exact path="/myoffers" render={() => <MyOffers />} />
      <PrivateRoute exact path="/myneeds" render={() => <MyNeeds />} />
      <PrivateRoute exact path="/addneed" render={() => <AddNeed />} />
      <PrivateRoute exact path="/addoffer" render={() => <AddOffer />} />
      <PrivateRoute exact path="/offers" render={() => <Offers />} />
      <PrivateRoute exact path="/needs" render={() => <Needs />} />
    </BrowserRouter>
  );
}

export default App;
