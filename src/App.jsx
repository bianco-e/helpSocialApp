import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Items from "./components/Items";
import MyOptions from "./components/MyOptions";
import AddItem from "./components/AddItem";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" render={Login} />
      <Route exact path="/home" render={Home} />
      <Route
        exact
        path="/myoffers"
        render={() => <MyOptions offers={true} />}
      />
      <Route exact path="/myneeds" render={() => <MyOptions needs={true} />} />
      <Route exact path="/addoffer" render={() => <AddItem offer={true} />} />
      <Route exact path="/addneed" render={() => <AddItem need={true} />} />
      <Route
        exact
        path="/offers"
        render={() => <Items asChild={false} offers={true} />}
      />
      <Route
        exact
        path="/needed"
        render={() => <Items asChild={false} needs={true} />}
      />
    </BrowserRouter>
  );
}

export default App;
