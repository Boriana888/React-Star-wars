import React, { useState } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Home from "./components/Home/Home";
import "./components/Home/Home.css";
import MoviesList from "./components/Movie/MoviesList";

function App() {
  const [movies, setMovies] = useState([]);
  function fetchMoviesHandler() {
    fetch("https://swapi.dev/api/films/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        setMovies(transformedMovies);
      });
  }

  const heroes = [
    { id: 1, name: "Luke" },
    { id: 2, name: "C-3PO" },
    { id: 3, name: "R2-D2" },
  ];

  // State to keep track of the selected hero ID
  const [selectedHeroId, setSelectedHeroId] = useState(null);

  // Handler for when the hero selection changes
  const handleHeroSelect = (event) => {
    const selectedId = parseInt(event.target.value);
    setSelectedHeroId(selectedId);
  };

  return (
    <div className="container">
      <Home />
      <MoviesList movies={movies} />
      <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      <h1 className="title">Hero Selection:</h1>
      <select onChange={handleHeroSelect} value={selectedHeroId || ""}>
        <option value="" disabled>
          Select a hero
        </option>
        {heroes.map((hero) => (
          <option key={hero.id} value={hero.id}>
            {hero.name}
          </option>
        ))}
      </select>
      {selectedHeroId && <Hero heroId={selectedHeroId} />}{" "}
      {/* Render MyComponent with the selected hero ID */}
      {/* <Home></Home> */}
    </div>
  );
}

export default App;
