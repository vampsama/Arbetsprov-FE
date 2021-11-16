import React, { ReactComponentElement, useEffect, useState } from "react";
import { useQueries } from "react-query";
import CityWeatherBox from "./CityWeatherBox";
import { CityWeatherData } from "./CityWeatherData";
import fetchCityWeatherData from "./FetchCityWeatherData";
import "./SearchResults.css";

const SearchResults = ({
  setError,
  deleteCity,
  cities,
}: {
  setError: (error: string) => void;
  deleteCity: (city: string) => void;
  cities: string[];
}) => {
  const cityQueries = useQueries(
    cities.map((city: string) => {
      return {
        queryKey: ["city", city],
        queryFn: () => {
          return fetchCityWeatherData(city, setError);
        },
      };
    })
  );
  console.log(cityQueries);

  return (
    <div className="SearchResults">
      {cityQueries
        .filter((query: any) => {
          if (query.data) {
            if (query.data.error) {
              return false;
            }
          }
          return true;
        })
        .sort((a: any, b: any) => {
          // ignore loading or error queries
          if (a.isLoading || b.isLoading) {
            return 1;
          }
          if (a.isError || b.isError) {
            return 1;
          }
          return b.data.current.temperature - a.data.current.temperature;
        })
        .map((query, index: number) => (
          <CityWeatherBox
            cityWeatherDataQuery={query}
            key={index}
            deleteCity={deleteCity}
          />
        ))}
    </div>
  );
};

export default SearchResults;
