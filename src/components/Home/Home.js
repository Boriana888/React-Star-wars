import React, { useState } from "react";
import starWarsImage from "./images/star-wars-darth-vader-hebruxikzb8n4fku.jpg";
import starWarsDarth from "./images/darth-vader-back-in-black-star-wars-7-darth-vader-s-past-is-even-darker-than-you-imagine-jpeg-288872.jpg";

function Home() {
  const [filmData, setFilmData] = useState(null);

  const fetchFilmData = (filmId) => {
    fetch(`https://swapi.dev/api/films/${filmId}/`)
      .then((response) => response.json())
      .then((data) => setFilmData(data))
      .catch((error) => console.error("Error fetching film data:", error));
  };

  return (
    <div className="container">
      <img src={starWarsDarth} alt="Star Wars Darth"></img>
      <h1 className="title">STAR WARS MOVIES</h1>
      {filmData ? (
        <div className="more">
          <h2>{filmData.title}</h2>

          <p>Episode: {filmData.episode_id}</p>
          <p>Director: {filmData.director}</p>
          <p>Release Date: {filmData.release_date}</p>
          <p>Created: {filmData.created}</p>
          <p>More: {filmData.opening_crawl}</p>
          <img src={starWarsImage} alt="Star Wars" />
        </div>
      ) : (
        <div className="btn">
          <p>Click the button for more information.</p>
          <button onClick={() => fetchFilmData(1)}>
            Click for Movie 1 Info
          </button>
          <button onClick={() => fetchFilmData(2)}>
            Click for Movie 2 Info
          </button>
          <button onClick={() => fetchFilmData(3)}>
            Click for Movie 3 Info
          </button>
          <button onClick={() => fetchFilmData(4)}>
            Click for Movie 4 Info
          </button>
          <button onClick={() => fetchFilmData(5)}>
            Click for Movie 5 Info
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
