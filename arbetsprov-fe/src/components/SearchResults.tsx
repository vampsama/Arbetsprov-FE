import React, { ReactComponentElement } from "react";
import CityWeatherBox from "./CityWeatherBox";
import { CityWeatherData } from "./CityWeatherData";
import "./SearchResults.css";

const SearchResults = (props: any) => {
  const deleteCity = (index: number): void => {
    console.log(index);
    props.deleteCity(index);
  };
  return (
    <div className="SearchResults">
      {props.cities.map((cityBox: string, index: number) => (
        <CityWeatherBox
          city={cityBox}
          key={index}
          index={index}
          deleteCity={deleteCity}
        />
      ))}
    </div>
  );
};

export default SearchResults;
