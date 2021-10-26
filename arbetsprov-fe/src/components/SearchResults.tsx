import React from "react";
import CityWeatherBox from "./CityWeatherBox";
import { CityWeatherData } from "./CityWeatherData";
import "./SearchResults.css";

const SearchResults = (props: any) => {
  const deleteCity = (index: number) => {
    console.log(index);
    props.deleteCity(index);
  };
  return (
    <div className="SearchResults">
      {props.cities.map((cityBox: CityWeatherData, index: number) => (
        <CityWeatherBox
          key={index}
          index={index}
          weatherCode={cityBox.weatherCode}
          tempClass={cityBox.tempClass}
          name={cityBox.name}
          temperature={cityBox.temperature}
          precip={cityBox.precip}
          deleteCity={deleteCity}
        />
      ))}
    </div>
  );
};

export default SearchResults;
