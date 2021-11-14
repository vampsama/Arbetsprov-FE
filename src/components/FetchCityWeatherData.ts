import { CityWeatherData } from "./CityWeatherData";

//const ACCESS_KEY = "2a3c7d622ca26f8553a04f9d42aafdf2"; // old
//const ACCESS_KEY = "64a205ab0a9becd5365ed9239aa4885c";
const ACCESS_KEY = "dcfcf590912ddb7099a5ad1dbb75f2bd";

const fetchCityWeatherData = async (city: string): Promise<any> => {
  const fetchURI = `http://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=${city}`;
  const res = await fetch(fetchURI);

  if (!res.ok) {
    throw new Error("Det finns ingen stad som matchar din sökning");
  }
  const json = await res.json();
  if (json.error) {
    throw new Error("Det finns ingen stad som matchar din sökning");
  }
  console.log(json);
  return json;
  // if (!json.success) {
  //   throw new Error("Error fetching data from API");
  // }
  // console.log(json);
  // if (json.success === false) {
  //   return { temperature: 0, weatherCode: 0, precip: 0 };
  // }
  // let newCityData: CityWeatherData = {
  //   name: json.location.name,
  //   temperature: json.current.temperature,
  //   precip: json.current.precip,
  //   weatherCode: json.current.weather_code,
  // };
  // return newCityData;
};
export default fetchCityWeatherData;
