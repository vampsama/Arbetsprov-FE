import React from "react";
import "./CityWeatherBox.css";
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

const CityWeatherBox = ({
  deleteCity,
  cityWeatherDataQuery,
}: {
  deleteCity: (city: string) => void;
  cityWeatherDataQuery: any;
}) => {
  if (cityWeatherDataQuery.isError) {
    return null;
  }
  if (cityWeatherDataQuery.isLoading) {
    return <div className={`CityWeatherBox`}></div>;
  }

  return (
    <div
      className={`CityWeatherBox ${getTempClass(
        cityWeatherDataQuery.data?.current.temperature,
        cityWeatherDataQuery.data?.current.precip
      )}`}
    >
      <div className="weatherData">
        <WeatherIcon
          weatherCode={cityWeatherDataQuery.data?.current.weather_code}
        />
        <div className="weatherText">
          <h2>{cityWeatherDataQuery.data?.current.temperature}</h2>
          <h3>{cityWeatherDataQuery.data?.location.name} </h3>
        </div>
      </div>
      <button
        value={cityWeatherDataQuery.data?.location.name}
        onClick={(e) => deleteCity(cityWeatherDataQuery.data?.location.name)}
      ></button>
    </div>
  );
};
export default CityWeatherBox;
