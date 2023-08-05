import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Octopath from "../pages/octopath";
import Octopath2 from "../pages/octopath2";
import Temenos from "../pages/Temenos";
export default function Router() {
  return (
    <Routes>
      <Route path="octopathtraveler.github.io/" element={<Home />} />
      <Route
        path="octopathtraveler.github.io/Octopath"
        element={<Octopath />}
      />
      <Route
        path="octopathtraveler.github.io/Octopath2"
        element={<Octopath2 />}
      />
      <Route path="octopathtraveler.github.io/Temenos" element={<Temenos />} />
    </Routes>
  );
}
