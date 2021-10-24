import React from "react";
import { useState } from "react";
import { CityWeatherData } from "./CityWeatherData";
import "./SearchField.css";
import SearchResults from "./SearchResults";
const ACCESS_KEY = "2a3c7d622ca26f8553a04f9d42aafdf2";
function SearchField() {
  const [city, setCity] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [cities, setCities] = useState<CityWeatherData[]>([]);

  function getTempClass(temperature: number, precip: number): string {
    let tempClass: string = "cold";
    if (precip > 0) {
      return tempClass;
    }
    if (temperature > 20) {
      tempClass = "hot";
    } else if (temperature > 0) {
      tempClass = "temperate";
    } else {
      tempClass = "cold";
    }
    return tempClass;
  }
  async function addCity(event: any) {
    event.preventDefault();
    if (city.length > 0) {
      const newCityData = await requestCity();

      if (newCityData.cityName) {
        newCityData.tempClass = getTempClass(
          newCityData.temperature,
          newCityData.precip
        );
        console.log(newCityData);
        const updateCities = [...cities, newCityData];
        updateCities.sort((a, b) => b.temperature - a.temperature);
        setCities(updateCities);
        setCity("");
        setErrorMessage("");
      } else {
        setErrorMessage("Det finns ingen stad som matchar din sökning");
      }
    }
  }

  async function requestCity(): Promise<CityWeatherData> {
    const res = await fetch(
      `http://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=${city}`
    );
    const json = await res.json();
    console.log(json);
    if (json.success === false) {
      return { temperature: 0, weatherCode: 0, precip: 0 };
    }
    let newCityData: CityWeatherData = {
      cityName: json.location.name,
      temperature: json.current.temperature,
      precip: json.current.precip,
      weatherCode: json.current.weather_code,
    };
    return newCityData;
  }
  return (
    <div className="SearchField">
      <form onSubmit={addCity}>
        <div className="inputContainer">
          <label htmlFor="city-search">
            Plats:
            <input
              id="city-search"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
          </label>
          <button></button>
        </div>
        <p>{errorMessage}</p>
      </form>
      <SearchResults cities={cities} />
    </div>
  );
}
export default SearchField;
