import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Offers from "./components/Offers";
import Needed from "./components/Needed";
import ItemCard from "./components/ItemCard";
import MyOffers from "./components/MyOffers";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={Login} />
        <Route exact path="/myoffers" render={MyOffers} />
        <Route exact path="/home" render={Home} />
        <Route
          exact
          path="/offers"
          render={() => <Offers topBar={true} profile={true} />}
        />
        <Route
          exact
          path="/needed"
          render={() => <Needed topBar={true} profile={true} />}
        />
        <Route exact path="/itemcard" render={ItemCard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
