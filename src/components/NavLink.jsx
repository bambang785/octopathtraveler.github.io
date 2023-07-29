import React from "react";
import { Link } from "react-router-dom";

export default function NavLink({ href, children }) {
  return (
    <Link
      className="inline-flex px-4 py-2 font-primary text-white hover:text-orange-400"
      to={href}
    >
      {children}
    </Link>
  );
}
