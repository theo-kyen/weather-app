import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

// saves the given report to local storage
function saveData(data, location, getDate) {
  const jsonData = {
    key: uuidv4(),
    milliseconds: data.pubDate,
    date: getDate(data.pubDate),
    location: location,
    temp: data.condition.temperature,
    weather: data.condition.text,
    sunrise: data.astronomy.sunrise,
    sunset: data.astronomy.sunset,
    humidity: data.atmosphere.humidity,
  };

  window.localStorage.setItem(jsonData.key, JSON.stringify(jsonData));

  document.getElementById("save--button").innerText = "Report Saved!";
  setTimeout(() => {
    document.getElementById("save--button").innerText = "Save Report";
  }, 1500);
}

// represents the weather report for the current date
const CurrentDay = ({ data, location, getDate }) => {
  return (
    <div className="current">
      {data && (
        <div className="day">
          <div className="day--header">
            <p className="day--bold">{getDate(data.pubDate)}</p>
          </div>
          <p className="day--bold temp">{data.condition.temperature}&deg;F</p>
          <p>{data.condition.text}</p>
          <p>
            Sunrise: {data.astronomy.sunrise}
            <br />
            Sunset: {data.astronomy.sunset}
          </p>
          <p>Humidity: {data.atmosphere.humidity}%</p>
          <div className="buttons">
            <button
              id="save--button"
              onClick={() => saveData(data, location, getDate)}
            >
              Save Report
            </button>
            <Link to={"/entries"}>
              <button>View Past Reports</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrentDay;
