import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Items from "./components/Items";
import MyOptions from "./components/MyOffers";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" render={Login} />
      <Route exact path="/home" render={Home} />
      <Route exact path="/myoptions" render={MyOptions} />
      <Route
        exact
        path="/offers"
        render={() => <Items forHome={false} offers={true} />}
      />
      <Route
        exact
        path="/needed"
        render={() => <Items forHome={false} needs={true} />}
      />
    </BrowserRouter>
  );
}

export default App;
