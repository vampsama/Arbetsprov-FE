import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import { CityWeatherData } from "./CityWeatherData";
import "./SearchField.css";

const SearchField = (props: any) => {
  const [city, setCity] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const addCity = async (event: any) => {
    event.preventDefault();
    if (city.length > 0) {
      props.addCity(city);
      setCity("");
    }
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
        <p>{props.error}</p>
      </form>
    </div>
  );
};
export default SearchField;
