import { CityWeatherData } from "./CityWeatherData";

//const ACCESS_KEY = "2a3c7d622ca26f8553a04f9d42aafdf2"; // old
//const ACCESS_KEY = "64a205ab0a9becd5365ed9239aa4885c";
const ACCESS_KEY = "dcfcf590912ddb7099a5ad1dbb75f2bd";

const fetchCityWeatherData = async (
  city: string,
  errorCallBack: (error: string) => void
): Promise<any> => {
  const fetchURI = `http://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=${city}`;
  const res = await fetch(fetchURI);

  if (!res.ok) {
    errorCallBack(city);
  }

  const json = await res.json();

  if (json.error) {
    errorCallBack(city);
  }

  return json;
};
export default fetchCityWeatherData;
