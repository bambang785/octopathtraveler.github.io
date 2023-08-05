import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Octopath from "../pages/octopath";
import Octopath2 from "../pages/octopath2";
import Temenos from "../pages/Temenos";
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/octopath" element={<Octopath />} />
      <Route path="/octopath2" element={<Octopath2 />} />
      <Route path="/Temenos" element={<Temenos />} />
    </Routes>
  );
}
