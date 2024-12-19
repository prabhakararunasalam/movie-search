import React, { useEffect, useState } from "react";
import { fetchMovies } from "../services/api";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");

  useEffect(() => {
    if (query) {
      const fetchData = async () => {
        try {
          const response = await fetchMovies(query, type, page);
          if (response && response.Response === "True") {
            setMovies(response.Search || []);
            setError(""); // Clear any previous errors
          } else {
            setMovies([]);
            setError(response.Error || "No movies found.");
          }
        } catch (err) {
          setMovies([]);
          setError("Failed to fetch movies. Please try again.");
          console.error(err);
        }
      };

      fetchData();
    } else {
      setMovies([]);
    }
  }, [query, page, type]);

  return (
    <div>
      {/* Search Bar */}
      <SearchBar onSearch={setQuery} onFilterChange={setType} />

      {/* Error Message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Movies List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>

      {/* Pagination */}
      {movies.length > 0 && <Pagination page={page} pageChange={setPage} />}
    </div>
  );
};

export default Home;
