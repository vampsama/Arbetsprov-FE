import React from "react";
import { useState } from "react";
import "./SearchField.css";

const SearchField = ({
  addCity,
  error,
}: {
  addCity: (city: string) => void;
  error: string;
}) => {
  const [city, setCity] = useState("");

  const submitCity = async (event: any) => {
    event.preventDefault();
    if (city.length > 0) {
      addCity(city);
      setCity("");
    }
  };
  return (
    <div className="SearchField container">
      <form onSubmit={submitCity}>
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
        <p>{error}</p>
      </form>
    </div>
  );
};
export default SearchField;
