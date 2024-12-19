import React from "react";
import { Link } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";

const Favorites = ({ favorites, removeFromFavorite }) => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Favorites</h1>
      {favorites.length === 0 ? (
        <p>You have no favorite movies yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favorites.map((movie) => (
            <div key={movie.imdbID} className="border p-4 rounded shadow">
              <Link to={`/movie/${movie.imdbID}`}>
                <img
                  className="w-full h-64 object-cover mb-2"
                  src={movie.Poster}
                  alt={movie.Title}
                />
                <h3 className="text-lg font-bold">{movie.Title}</h3>
                <p className="text-sm text-gray-600">{movie.Year}</p>
              </Link>
              <button
                onClick={() => removeFromFavorite(movie)}
                className="flex items-center gap-2 text-red-500 mt-2"
              >
                <MdFavoriteBorder /> Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
