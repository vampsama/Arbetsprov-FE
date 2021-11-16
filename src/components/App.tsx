import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import SearchField from "./SearchField";
import SearchResults from "./SearchResults";
import logo from "../images/isotop_logo_white.svg";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";

const App = () => {
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

  const localStorageCities = localStorage.getItem("cities");

  const [cities, setCities] = useState<string[]>(
    localStorageCities ? JSON.parse(localStorageCities) : []
  );

  const [error, setError] = useState("");

  const setErrorCity = (city: string): void => {
    deleteCity(city);
    setError("Det finns ingen stad som matchar din sökning");
  };

  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(cities));
    console.log(cities);
  }, [cities]);

  const deleteCity = (cityToDelete: string): void => {
    const newCities = cities.filter((city) => city != cityToDelete);
    setCities(newCities);
  };

  const addCity = (newCity: string): void => {
    setError("");
    console.log(cities);
    const newCities = [...cities, newCity.toLowerCase()];
    setCities(newCities);
  };
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <div className="mainContainer container ">
          <div className="headerContainer">
            <h1>Hur är vädret i...</h1>
          </div>
          <SearchField error={error} addCity={addCity} />
          <SearchResults
            setError={setErrorCity}
            cities={cities}
            deleteCity={deleteCity}
          />
        </div>
        <div className="footerContainer container">
          <img className="logo" src={logo} />
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default App;
