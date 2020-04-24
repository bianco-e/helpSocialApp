import React, { lazy, Suspense } from "react";
import TopBar from "./TopBar";
import Profile from "./Profile";
const Items = lazy(() => import("./Items"));

const Home = () => {
  return (
    <div>
      <TopBar />
      <Profile />
      <div className="App marginLeft">
        <div className="flexColumn">
          <Suspense fallback="Cargando...">
            <Items forHome={true} needs={true} />
          </Suspense>
          <Suspense fallback="Cargando...">
            <Items forHome={true} offers={true} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Home;
