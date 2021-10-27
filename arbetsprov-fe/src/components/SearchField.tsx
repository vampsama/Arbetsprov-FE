import React from "react";
import { useState } from "react";
import { CityWeatherData } from "./CityWeatherData";
import "./SearchField.css";
const ACCESS_KEY = "2a3c7d622ca26f8553a04f9d42aafdf2";
const SearchField = (props: any) => {
  const [city, setCity] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const addCity = async (event: any) => {
    event.preventDefault();
    if (city.length > 0) {
      const newCityData = await requestCity();

      if (newCityData.name) {
        console.log(newCityData);
        props.addCity(newCityData);
        setCity("");
        setErrorMessage("");
      } else {
        setErrorMessage("Det finns ingen stad som matchar din sökning");
      }
    }
  };

  const requestCity = async (): Promise<CityWeatherData> => {
    const res = await fetch(
      `http://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=${city}`
    );
    const json = await res.json();
    console.log(json);
    if (json.success === false) {
      return { temperature: 0, weatherCode: 0, precip: 0 };
    }
    let newCityData: CityWeatherData = {
      name: json.location.name,
      temperature: json.current.temperature,
      precip: json.current.precip,
      weatherCode: json.current.weather_code,
    };
    return newCityData;
  };
  return (
    <div className="SearchField container">
      <form onSubmit={addCity}>
        <div className="inputContainer">
          <label htmlFor="citySearch">Plats:</label>
          <input
            id="citySearch"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
          <div className="buttonContainer">
            <button></button>
          </div>
        </div>
        <p>{errorMessage}</p>
      </form>
    </div>
  );
};
export default SearchField;
