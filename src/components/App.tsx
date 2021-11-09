import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import SearchField from "./SearchField";
import SearchResults from "./SearchResults";
import logo from "../images/isotop_logo_white.svg";
import { QueryClient, QueryClientProvider, useQueries } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      refetchOnReconnect: false,
      cacheTime: 1000 * 60 * 30,
      staleTime: 1000 * 60 * 30,
    },
  },
});

const App = () => {
  const localStorageCities = localStorage.getItem("cities");
  const [cities, setCities] = useState<string[]>(
    localStorageCities ? JSON.parse(localStorageCities) : []
  );

  useEffect(
    () => localStorage.setItem("cities", JSON.stringify(cities)),
    [cities]
  );
  const deleteCity = (index: number) => {
    let newCities = [...cities];
    newCities.splice(index, 1);
    setCities(newCities);
  };
  const addCity = (newCity: string) => {
    const newCities = [...cities, newCity];
    setCities(newCities);
  };
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <div className="mainContainer container ">
          <div className="headerContainer">
            <h1>Hur är vädret i...</h1>
          </div>
          <SearchField addCity={addCity} />
          <SearchResults cities={cities} deleteCity={deleteCity} />
        </div>
        <div className="footerContainer container">
          <img className="logo" src={logo} />
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default App;
