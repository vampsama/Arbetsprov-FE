import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import { CityWeatherData } from "./CityWeatherData";
import SearchField from "./SearchField";
import SearchResults from "./SearchResults";
import logo from "../isotop_logo_white.svg";

function App() {
  const [cities, setCities] = useState<CityWeatherData[]>([
    { name: "Stockholm", precip: 0, temperature: 7, weatherCode: 113 },
    { name: "Oslo", precip: 0, temperature: 8, weatherCode: 113 },
    { name: "Paris", precip: 0, temperature: 20, weatherCode: 113 },
    { name: "Solen", precip: 0, temperature: 100, weatherCode: 113 },
  ]);

  const deleteCity = (index: number) => {
    let newCities = cities.slice();
    newCities.splice(index, 1);
    setCities(newCities);
    console.log(cities);
    console.log(newCities);
  };
  const addCity = (newCityData: CityWeatherData) => {
    const newCities = [...cities, newCityData].sort(
      (a, b) => b.temperature - a.temperature
    );
    setCities(newCities);
  };
  return (
    <div className="App">
      <div className="container ">
        <div className="headerContainer">
          <h1>Hur är vädret i...</h1>
        </div>
        <SearchField addCity={addCity} />
        <SearchResults cities={cities} deleteCity={deleteCity} />
      </div>
      <div className="footerContainer container">
        <img className="logo" src={logo} />
      </div>
    </div>
  );
}

export default App;
