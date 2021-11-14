import React, { ReactComponentElement, useEffect, useState } from "react";
import { useQueries } from "react-query";
import CityWeatherBox from "./CityWeatherBox";
import { CityWeatherData } from "./CityWeatherData";
import fetchCityWeatherData from "./FetchCityWeatherData";
import "./SearchResults.css";

const SearchResults = (props: any) => {
  const [error, setError] = useState("");
  const deleteCity = (index: number): void => {
    console.log(index);
    props.deleteCity(index);
  };

  const cityQueries = useQueries(
    props.cities.map((city: string) => {
      return {
        queryKey: ["city", city],
        queryFn: () => {
          return fetchCityWeatherData(city);
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
              //setError("Det finns ingen stad som matchar din sökning");
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
