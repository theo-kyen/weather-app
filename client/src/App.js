import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import CurrentDay from "./components/CurrentDay";
import ForecastDays from "./components/ForecastDays";
import * as sampleData from "./data.json";

// returns the given date in string format
function getDate(date) {
  return new Date(date * 1000).toDateString();
}

// returns the location of the report
function getLocation(data) {
  if (data && data.location) {
    return `${data.location.city}, ${data.location.country}`;
  }
}

// gets the user's coordinates
let lat, long;
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((pos) => {
    lat = pos.coords.latitude;
    long = pos.coords.longitude;
  });
}

// represents the main app page
const App = () => {
  const [weatherData, setWeatherData] = useState();
  // fetches the data from the API
  async function fetchData() {
    if (lat && long) {
      const res = await fetch(`weather/${lat},${long}`);
      const data = await res.json();

      if (data) {
        setWeatherData(data);
      }
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app">
      <h1>Weather Forecast</h1>
      {!weatherData ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>{getLocation(weatherData)}</p>
          <h3>Today</h3>
          <CurrentDay
            data={weatherData.current_observation}
            location={getLocation(weatherData)}
            getDate={getDate}
          />
          <h3>7-Day Forecast</h3>
          <ForecastDays
            data={weatherData && weatherData.forecasts?.slice(0, 7)}
            getDate={getDate}
          />
        </div>
      )}
    </div>
  );
};

export default App;
