import React from "react";

import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

const MovieDetails = ({ movie, isFavorite, toggleFavorite }) => {
  return (
    <div className="flex justify-center items-center m-10">
      <div className="">
        <img className="mb-5" src={movie.Poster} alt={movie.Title} />

        <h1 className="font-serif text-xl">{movie.Title}</h1>
        <p className="font-bold">{movie.Year}</p>
        <p className="font-medium">{movie.Plot}</p>
        <p className="font-bold text-red-500">{movie.Genre}</p>
        <p>{movie.Released}</p>

        {/* Ratings Section */}
        <div>
          <h2>Ratings</h2>
          <ul>
            {movie.Ratings && movie.Ratings.length > 0 ? (
              movie.Ratings.map((rating, index) => (
                <li key={index}>
                  <strong>{rating.Source}:</strong> {rating.Value}
                </li>
              ))
            ) : (
              <p>No ratings available.</p>
            )}
          </ul>
        </div>
        <button
          onClick={toggleFavorite}
          className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded"
        >
          {isFavorite ? (
            <>
              <MdFavorite />
              Remove from Favorites
            </>
          ) : (
            <>
              <MdFavoriteBorder />
              Add to Favorites
            </>
          )}
        </button>
      
      </div>
    </div>
  );
};

export default MovieDetails;
