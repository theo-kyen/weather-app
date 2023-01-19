import React from "react";
import { Link } from "react-router-dom";

// loads past reports for the user to see
function loadData() {
  const data = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    data.push(JSON.parse(localStorage.getItem(key)));
  }
  return data.sort((a, b) => b.milliseconds - a.milliseconds);
}

// represents the weather report for the past dates
const PastDays = () => {
  const data = loadData();
  return (
    <div className="past--days">
      <h2>Past Reports</h2>
      <div className="past--days--report">
        {data.map((day) => {
          return (
            <div className="day" key={day.key}>
              <div className="day--header">
                <p className="day--bold">{day.date}</p>
              </div>
              <div className="info">
                <p>{day.location}</p>
                <p className="day--bold temp">{day.temp}&deg;F</p>
                <p>{day.weather}</p>
                <p>Humidity: {day.humidity}%</p>
                <p>
                  Sunrise: {day.sunrise}
                  <br />
                  Sunset: {day.sunset}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <Link to={"/"}>
        <button>Back</button>
      </Link>
    </div>
  );
};

export default PastDays;
