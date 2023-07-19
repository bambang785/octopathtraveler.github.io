import React from "react";
import Case from "./Case";
import NavLink from "./Navlink";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-black py-3 opacity-75">
      <Case>
        <div className="flex  items-center">
          <img class="bg-OT1" alt="OT" className="w-50 h-16" />
          <Link
            className=" mr-2 font-primary text-sm font-semibold uppercase text-white"
            to="/"
          ></Link>
          <NavLink href="/octopathtraveler.github.io">Home</NavLink>
          <NavLink href="octopathtraveler.github.io/Octopath">
            Octopath Traveler
          </NavLink>
          <NavLink href="octopathtraveler.github.io/octopath2">
            Octopath Traveler II
          </NavLink>
        </div>
      </Case>
    </div>
  );
}
