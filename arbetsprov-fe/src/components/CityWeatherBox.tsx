import React from "react";
import "./CityWeatherBox.css";
import WeatherIcon from "./WeatherIcon";
function CityWeatherBox(props: any) {
  const styles = { order: props.temperature };
  return (
    <div className={`CityWeatherBox ${props.tempClass}`}>
      <WeatherIcon weatherCode={props.weatherCode} />
      <h2>{props.temperature}</h2>
      <h3>{props.cityName} </h3>
    </div>
  );
}
export default CityWeatherBox;
