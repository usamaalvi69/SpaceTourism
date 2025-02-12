import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {  Layout } from "./components";
import { Crew, Destinations, Home, Technology } from "./screens";


export const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Route>
      </Routes>
    </Router>
  );
};
