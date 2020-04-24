import React, { lazy, Suspense } from "react";
import TopBar from "./TopBar";
import Profile from "./Profile";
const Offers = lazy(() => import("./Offers"));
const Needed = lazy(() => import("./Needed"));

const Home = () => {
  return (
    <div>
      <TopBar />
      <div className="App">
        <Profile />
        <div className="flexColumn">
          <Suspense fallback="Cargando...">
            <Needed topBar={false} profile={false} />
          </Suspense>
          <Suspense fallback="Cargando...">
            <Offers topBar={false} profile={false} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Home;
