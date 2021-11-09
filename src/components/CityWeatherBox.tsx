import React from "react";
import { useQuery } from "react-query";
import "./CityWeatherBox.css";
import { CityWeatherData } from "./CityWeatherData";
import fetchCityWeatherData from "./FetchCityWeatherData";
import WeatherIcon from "./WeatherIcon";

const getTempClass = (temperature: number, precip: number): string => {
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
};

const CityWeatherBox = (props: any) => {
  const deleteCity = (event: any) => {
    props.deleteCity(event.target.value);
  };

  if (props.cityWeatherDataQuery.isError) {
    return <span>Error: {props.cityWeatherDataQuery.error.message}</span>;
  }
  if (props.cityWeatherDataQuery.isLoading) {
    return <div className={`CityWeatherBox`}></div>;
  }

  return (
    <div
      className={`CityWeatherBox ${getTempClass(
        props.cityWeatherDataQuery.data?.current.temperature,
        props.cityWeatherDataQuery.data?.current.precip
      )}`}
    >
      <div className="weatherData">
        <WeatherIcon
          weatherCode={props.cityWeatherDataQuery.data?.current.weather_code}
        />
        <div className="weatherText">
          <h2>{props.cityWeatherDataQuery.data?.current.temperature}</h2>
          <h3>{props.cityWeatherDataQuery.data?.location.name} </h3>
        </div>
      </div>
      <button value={props.index} onClick={deleteCity}></button>
    </div>
  );
};
export default CityWeatherBox;
