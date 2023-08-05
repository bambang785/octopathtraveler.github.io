import React from "react";
import Case from "./Case";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-black py-3 opacity-60">
      <Case>
        <div className="flex items-center">
          <img
            src="https://thumbs2.imgbox.com/d3/4e/BQTCzlkR_t.png"
            alt="OT"
            className="w-50 h-16"
          />
          <Link
            className=" mr-2 text-sm font-semibold uppercase text-white"
            to="/"
          ></Link>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/Octopath">Octopath Traveler</NavLink>
          <NavLink href="/Octopath2">Octopath Traveler II</NavLink>
        </div>
      </Case>
    </div>
  );
}
