import React from "react";
import { Header } from "./components";
import { Home } from "./screens";

export const App = () => {
  return (
    <div className="main">
      <Header/>
      <Home/>
    </div>
  );
};
