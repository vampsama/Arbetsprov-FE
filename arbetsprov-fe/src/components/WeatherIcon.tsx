import React from "react";
import "./WeatherIcon.css";

function WeatherIcon(props: any) {
  return (
    <div className={`WeatherIcon ${getWeatherClass(props.weatherCode)}`}></div>
  );
}

function getWeatherClass(weatherCode: number): string {
  let weatherClass = "";
  switch (weatherCode) {
    case 395:
      weatherClass = "storm";
      break; //	Moderate or heavy snow in area with thunder	wsymbol_0012_heavy_snow_showers	wsymbol_0028_heavy_snow_showers_night
    case 392:
      weatherClass = "storm";
      break; //	Patchy light snow in area with thunder	wsymbol_0016_thundery_showers	wsymbol_0032_thundery_showers_night
    case 389:
      weatherClass = "storm";
      break; //	Moderate or heavy rain in area with thunder	wsymbol_0024_thunderstorms	wsymbol_0040_thunderstorms_night
    case 386:
      weatherClass = "storm";
      break; //	Patchy light rain in area with thunder	wsymbol_0016_thundery_showers	wsymbol_0032_thundery_showers_night
    case 377:
      weatherClass = "hale";
      break; // Moderate or heavy showers of ice pellets	wsymbol_0021_cloudy_with_sleet	wsymbol_0037_cloudy_with_sleet_night
    case 374:
      weatherClass = "hale";
      break; // Light showers of ice pellets	wsymbol_0013_sleet_showers	wsymbol_0029_sleet_showers_night
    case 371:
      weatherClass = "snow";
      break; // Moderate or heavy snow showers	wsymbol_0012_heavy_snow_showers	wsymbol_0028_heavy_snow_showers_night
    case 368:
      weatherClass = "snow";
      break; // Light snow showers	wsymbol_0011_light_snow_showers	wsymbol_0027_light_snow_showers_night
    case 365:
      weatherClass = "cloud-mixed";
      break; // Moderate or heavy sleet showers	wsymbol_0013_sleet_showers	wsymbol_0029_sleet_showers_night
    case 362:
      weatherClass = "cloud-mixed";
      break; // Light sleet showers	wsymbol_0013_sleet_showers	wsymbol_0029_sleet_showers_night
    case 359:
      weatherClass = "rain";
      break; // Torrential rain shower	wsymbol_0018_cloudy_with_heavy_rain	wsymbol_0034_cloudy_with_heavy_rain_night
    case 356:
      weatherClass = "rain";
      break; // Moderate or heavy rain shower	wsymbol_0010_heavy_rain_showers	wsymbol_0026_heavy_rain_showers_night
    case 353:
      weatherClass = "rain";
      break; // Light rain shower	wsymbol_0009_light_rain_showers	wsymbol_0025_light_rain_showers_night
    case 350:
      weatherClass = "hale";
      break; // Ice pellets	wsymbol_0021_cloudy_with_sleet	wsymbol_0037_cloudy_with_sleet_night
    case 338:
      weatherClass = "cloud-snow";
      break; //Heavy snow	wsymbol_0020_cloudy_with_heavy_snow	wsymbol_0036_cloudy_with_heavy_snow_night
    case 335:
      weatherClass = "cloud-snow";
      break; //Patchy heavy snow	wsymbol_0012_heavy_snow_showers	wsymbol_0028_heavy_snow_showers_night
    case 332:
      weatherClass = "cloud-snow";
      break; //Moderate snow	wsymbol_0020_cloudy_with_heavy_snow	wsymbol_0036_cloudy_with_heavy_snow_night
    case 329:
      weatherClass = "cloud-snow";
      break; //Patchy moderate snow	wsymbol_0020_cloudy_with_heavy_snow	wsymbol_0036_cloudy_with_heavy_snow_night
    case 326:
      weatherClass = "cloud-snow";
      break; //Light snow	wsymbol_0011_light_snow_showers	wsymbol_0027_light_snow_showers_night
    case 323:
      weatherClass = "cloud-snow";
      break; //Patchy light snow	wsymbol_0011_light_snow_showers	wsymbol_0027_light_snow_showers_night
    case 320:
      weatherClass = "cloud-mixed";
      break; //Moderate or heavy sleet	wsymbol_0019_cloudy_with_light_snow	wsymbol_0035_cloudy_with_light_snow_night
    case 317:
      weatherClass = "cloud-mixed";
      break; //Light sleet	wsymbol_0021_cloudy_with_sleet	wsymbol_0037_cloudy_with_sleet_night
    case 314:
      weatherClass = "cloud-mixed";
      break; //Moderate or Heavy freezing rain	wsymbol_0021_cloudy_with_sleet	wsymbol_0037_cloudy_with_sleet_night
    case 311:
      weatherClass = "cloud-mixed";
      break; //Light freezing rain	wsymbol_0021_cloudy_with_sleet	wsymbol_0037_cloudy_with_sleet_night
    case 308:
      weatherClass = "cloud-rain";
      break; //Heavy rain	wsymbol_0018_cloudy_with_heavy_rain	wsymbol_0034_cloudy_with_heavy_rain_night
    case 305:
      weatherClass = "cloud-rain";
      break; //Heavy rain at times	wsymbol_0010_heavy_rain_showers	wsymbol_0026_heavy_rain_showers_night
    case 302:
      weatherClass = "cloud-rain";
      break; //Moderate rain	wsymbol_0018_cloudy_with_heavy_rain	wsymbol_0034_cloudy_with_heavy_rain_night
    case 299:
      weatherClass = "cloud-rain";
      break; //Moderate rain at times	wsymbol_0010_heavy_rain_showers	wsymbol_0026_heavy_rain_showers_night
    case 296:
      weatherClass = "cloud-rain";
      break; //Light rain	wsymbol_0017_cloudy_with_light_rain	wsymbol_0025_light_rain_showers_night
    case 293:
      weatherClass = "cloud-rain";
      break; //Patchy light rain	wsymbol_0017_cloudy_with_light_rain	wsymbol_0033_cloudy_with_light_rain_night
    case 284:
      weatherClass = "cloud-mixed";
      break; //Heavy freezing drizzle	wsymbol_0021_cloudy_with_sleet	wsymbol_0037_cloudy_with_sleet_night
    case 281:
      weatherClass = "cloud-mixed";
      break; //Freezing drizzle	wsymbol_0021_cloudy_with_sleet	wsymbol_0037_cloudy_with_sleet_night
    case 266:
      weatherClass = "cloud-rain";
      break; //Light drizzle	wsymbol_0017_cloudy_with_light_rain	wsymbol_0033_cloudy_with_light_rain_night
    case 263:
      weatherClass = "cloud-rain";
      break; //Patchy light drizzle	wsymbol_0009_light_rain_showers	wsymbol_0025_light_rain_showers_night
    case 260:
      weatherClass = "fog";
      break; //Freezing fog	wsymbol_0007_fog	wsymbol_0007_fog
    case 248:
      weatherClass = "fog";
      break; //Fog	wsymbol_0007_fog	wsymbol_0007_fog
    case 230:
      weatherClass = "snow";
      break; //Blizzard	wsymbol_0020_cloudy_with_heavy_snow	wsymbol_0036_cloudy_with_heavy_snow_night
    case 227:
      weatherClass = "snow";
      break; //Blowing snow	wsymbol_0019_cloudy_with_light_snow	wsymbol_0035_cloudy_with_light_snow_night
    case 200:
      weatherClass = "lightning";
      break; // Thundery outbreaks in nearby	wsymbol_0016_thundery_showers	wsymbol_0032_thundery_showers_night
    case 185:
      weatherClass = "cloud-mixed";
      break; // Patchy freezing drizzle nearby	wsymbol_0021_cloudy_with_sleet	wsymbol_0037_cloudy_with_sleet_night
    case 182:
      weatherClass = "cloud-mixed";
      break; // Patchy sleet nearby	wsymbol_0021_cloudy_with_sleet	wsymbol_0037_cloudy_with_sleet_night
    case 179:
      weatherClass = "cloud-snow";
      break; // Patchy snow nearby	wsymbol_0013_sleet_showers	wsymbol_0029_sleet_showers_night
    case 176:
      weatherClass = "cloud-rain";
      break; // Patchy rain nearby	wsymbol_0009_light_rain_showers	wsymbol_0025_light_rain_showers_night
    case 143:
      weatherClass = "fog";
      break; // Mist	wsymbol_0006_mist	wsymbol_0006_mist
    case 122:
      weatherClass = "cloud-day";
      break; // Overcast	wsymbol_0004_black_low_cloud	wsymbol_0004_black_low_cloud
    case 119:
      weatherClass = "cloud-day";
      break; // Cloudy	wsymbol_0003_white_cloud	wsymbol_0004_black_low_cloud
    case 116:
      weatherClass = "cloud-day";
      break; // Partly Cloudy	wsymbol_0002_sunny_intervals	wsymbol_0008_clear_sky_night
    case 113:
      weatherClass = "sun";
      break; // Clear/Sunny	wsymbol_0001_sunny	wsymbol_0008_clear_sky_night
  }
  return weatherClass;
}
export default WeatherIcon;
