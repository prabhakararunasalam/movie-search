import React from "react";
import { MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = ({ favoritesCount }) => {
  return (
    <nav className="bg-pink-200 ">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to={"/"}>MovieDB</Link>
        </div>
        <div>
          <Link to={"/Favorites"}>
            <MdFavorite className="w-7 h-8" />
            {/* Show the favorites count as a badge */}
            {favoritesCount > 0 && (
              <span className="absolute top-7 text-xs bg-red-500 text-white rounded-full px-2 py-1">
                {favoritesCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
