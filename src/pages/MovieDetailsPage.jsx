import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesDetails } from "../services/api";
import MovieDetails from "../components/MovieDetails";

const MovieDetailsPage = ({ addToFavorite, removeFromFavorite, favorites }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchMoviesDetails(id);
        if (response && response.Response === "True") {
          setMovie(response);
        } else {
          setError(response.Error || "Failed to fetch movie details.");
        }
      } catch (err) {
        console.error(err);
        setError("Failed to fetch movie details. Please try again.");
      }
    };

    fetchData();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!movie) return <p>Loading movie details...</p>;

  const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

  return (
    <div className="p-4">
      <MovieDetails
        movie={movie}
        isFavorite={isFavorite}
        toggleFavorite={() =>
          isFavorite ? removeFromFavorite(movie) : addToFavorite(movie)
        }
      />
    </div>
  );
};

export default MovieDetailsPage;
