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

// represents the main app page
const App = () => {
  let lat, long; // the coordinates of the user
  const [weatherData, setWeatherData] = useState(sampleData);

  // gets the user's coordinates
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((pos) => {
      lat = pos.coords.latitude;
      long = pos.coords.longitude;
    });
  }

  // fetches the data from the API
  async function fetchData() {
    const res = await fetch(`weather/${lat},${long}`);
    const data = await res.json();

    if (data) {
      setWeatherData(data);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app">
      <h1>Weather Forecast</h1>
      <div>
        <p>{`${weatherData.location.city}, ${weatherData.location.country}`}</p>
        <h3>Today</h3>
        <CurrentDay data={weatherData.current_observation} getDate={getDate} />
        <h3>7-Day Forecast</h3>
        <ForecastDays
          data={weatherData.forecasts.slice(0, 7)}
          getDate={getDate}
        />
      </div>
    </div>
  );
};

export default App;
