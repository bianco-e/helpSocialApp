import React from "react";
import TopBar from "./TopBar";
import Profile from "./Profile";
import Offers from "./Offers";
import Needed from "./Needed";

const Home = () => {
  return (
    <div>
      <TopBar />
      <div className="App">
        <Profile />
        <div className="flexColumn">
          <Needed topBar={false} profile={false} />
          <Offers topBar={false} profile={false} />
        </div>
      </div>
    </div>
  );
};

export default Home;
