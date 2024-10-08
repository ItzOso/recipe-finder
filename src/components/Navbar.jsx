import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-primary h-[65px] flex items-center">
      <h2 className="ml-12 font-bold text-textPrimary">
        <Link to="/">RecipeFinder</Link>
      </h2>
      <p className="ml-12 text-white">
        <Link to="/">Home</Link>
      </p>
      <p className="ml-9 text-white">
        <Link to="/favorites">Favorites</Link>
      </p>
    </div>
  );
}

export default Navbar;
