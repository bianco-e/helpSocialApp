import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import {
  firstnOfferedItems,
  firstnNeededItems,
  firstnMyOffers,
  firstnMyNeeds,
} from "../data/apiInteraction.js";
import Login from "../views/Login";
import Home from "../views/Home";
import Needs from "../views/Needs";
import Offers from "../views/Offers";
import MyOptions from "../views/MyOptions";
import AddItem from "../views/AddItem";
import PrivateRoute from "./PrivateRoute";
import SearchResults from "../views/SearchResults";

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
      <Route
        exact
        path="/myoffers"
        render={() => (
          <MyOptions arrayToRender={firstnMyOffers(10)} myoffers={true} />
        )}
      />
      <Route
        exact
        path="/myneeds"
        render={() => (
          <MyOptions arrayToRender={firstnMyNeeds(10)} myneeds={true} />
        )}
      />
      <Route exact path="/addoffer" render={() => <AddItem offer={true} />} />
      <Route exact path="/addneed" render={() => <AddItem need={true} />} />
      <Route
        exact
        path="/offers"
        render={() => <Offers arrayToRender={firstnOfferedItems(10)} />}
      />
      <Route
        exact
        path="/needed"
        render={() => <Needs arrayToRender={firstnNeededItems(10)} />}
      />
    </BrowserRouter>
  );
}

export default App;
