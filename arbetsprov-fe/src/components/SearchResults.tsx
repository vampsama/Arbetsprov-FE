import React from "react";
import CityWeatherBox from "./CityWeatherBox";
import { CityWeatherData } from "./CityWeatherData";
import "./SearchResults.css";

const SearchResults = ({ cities }: any) => {
  return (
    <div className="SearchResults">
      {cities.map((cityBox: CityWeatherData, index: number) => (
        <CityWeatherBox
          weatherCode={cityBox.weatherCode}
          tempClass={cityBox.tempClass}
          key={index}
          cityName={cityBox.cityName}
          temperature={cityBox.temperature}
        />
      ))}
    </div>
  );
};

export default SearchResults;
