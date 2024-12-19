import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

import MovieDetailsPage from './pages/MovieDetailsPage';

const App = () => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorite = (movie) => {
    setFavorites((preFavorites) => {
      const alreadyinFavorites = preFavorites.find(
        (fav) => fav.imdbID === movie.imdbID
      );

      if (alreadyinFavorites) {
        // If the movie is already in favorites, return the list unchanged
        return preFavorites.map((fav) =>
          fav.imdbID === movie.imdbID ? { ...fav } : fav
        );
      } else {
        // Add the movie to the favorites list
        return [...preFavorites, movie];
      }
    });
  };
  //remove movie from favorites
  const removeFromFavorite = (movie) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.imdbID !== movie.imdbID)
    );
  };

  return (
    <BrowserRouter>
      <Navbar favoritesCount={favorites.length}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favorites' element = {<Favorites favorites={favorites} removeFromFavorite = {removeFromFavorite} />}/>
        <Route path="/movie/:id" element={<MovieDetailsPage favorites={favorites} addToFavorite={addToFavorite} removeFromFavorite = {removeFromFavorite}/>} />
      </Routes>
      </BrowserRouter>
  );
};

export default App;