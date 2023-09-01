import React, { useState, useEffect } from "react";
import Vehicle from "../Vehicle/Vehicle";

function Hero({ heroId }) {
  const [heroData, setHeroData] = useState(null);
  const [vehiclesData, setVehiclesData] = useState([], null);

  useEffect(() => {
    // Fetch hero data based on the heroId prop
    // Replace this with your actual API call logic
    fetch(`https://swapi.dev/api/people/${heroId}`)
      .then((response) => response.json())
      .then((data) => setHeroData(data))
      .catch((error) => console.log("Error fetching hero data:", error));
    setVehiclesData([]);
  }, [heroId]); // Fetch data whenever the heroId prop changes

  const loadVehicles = (urls) => {
    const promises = urls.map((url) =>
      fetch(url)
        .then((response) => response.json())
        .catch((error) => {
          console.log(`Error fetching data from URL: ${url}`, error);
          return null;
        })/*  */
    );

    Promise.all(promises).then((data) => {
      setVehiclesData(data);
      // console.log('Vehicles Data:', data);
      // You can perform any logic with the data from the vehicles' URLs here
    });
  };

  if (!heroData) return <div>Loading...</div>;
  //   console.log(heroData.vehicles);

  return (
    <>
      <div className="hero-cont">
        <h1 className="hero-name">Name: {heroData.name}</h1>
        <p className="hero-eyes">Eyes Color: {heroData.eye_color}</p>
        <p className="hero-hair">Hair Color: {heroData.hair_color}</p>
        <p className="hero-height">Height: {heroData.height}</p>
        {heroData.vehicles.length > 0 && (
          <button onClick={() => loadVehicles(heroData.vehicles)}>
            Show {heroData.name}'s vehicles
          </button>
        )}{" "}
      </div>
      {vehiclesData.length > 0 && <Vehicle vehicles={vehiclesData} />}
      {""}
    </>
  );
}

export default Hero;
