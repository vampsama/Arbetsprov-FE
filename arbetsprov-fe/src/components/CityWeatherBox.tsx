import React from "react";
import "./CityWeatherBox.css";
import { CityWeatherData } from "./CityWeatherData";
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
  const styles = { order: props.temperature };
  const tempClass = getTempClass(props.temperature, props.precip);
  const deleteCity = (event: any) => {
    console.log(event.target.value);
    props.deleteCity(event.target.value);
  };
  return (
    <div className={`CityWeatherBox ${tempClass}`}>
      <div className="weatherData">
        <WeatherIcon weatherCode={props.weatherCode} />
        <div className="weatherText">
          <h2>{props.temperature}</h2>
          <h3>{props.name} </h3>
        </div>
      </div>
      <button value={props.index} onClick={deleteCity}></button>
    </div>
  );
};
export default CityWeatherBox;
