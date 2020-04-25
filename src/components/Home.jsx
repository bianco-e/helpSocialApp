import React, { lazy, Suspense } from "react";
import TopBar from "./TopBar";
import Profile from "./Profile";
const Items = lazy(() => import("./Items"));

const Home = () => {
  return (
    <div>
      <TopBar />
      <Profile />
      <div className="App margin21-1">
        <div className="flexColumn">
          <Suspense fallback="Cargando...">
            <Items needs={true} />
          </Suspense>
          <Suspense fallback="Cargando...">
            <Items offers={true} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Home;
