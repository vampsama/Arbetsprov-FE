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
  const cityWeatherDataQuery = useQuery<any, Error>(
    ["cityWeatherData", props.city],
    () => fetchCityWeatherData(props.city)
  );
  const deleteCity = (event: any) => {
    console.log(event.target.value);
    props.deleteCity(event.target.value);
  };

  if (cityWeatherDataQuery.isError) {
    return <span>Error: {cityWeatherDataQuery.error.message}</span>;
  }
  if (cityWeatherDataQuery.isLoading) {
    return <div className={`CityWeatherBox`}></div>;
  }

  console.log(cityWeatherDataQuery);
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
      <button value={props.index} onClick={deleteCity}></button>
    </div>
  );
};
export default CityWeatherBox;
