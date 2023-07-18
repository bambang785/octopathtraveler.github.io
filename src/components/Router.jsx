import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Octopath from "../pages/octopath";
import Octopath2 from "../pages/octopath2";

export default function Router() {
  return (
    <Routes>
      <Route path="octopathtraveler.github.io" element={<Home />} />
      <Route path="Octopath" element={<Octopath />} />
      <Route path="octopath2" element={<Octopath2 />} />
    </Routes>
  );
}
