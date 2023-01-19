import React from "react";

// represents a single day of the forecast
const ForecastDay = ({ date, high, low, weather }) => {
  return (
    <div className="day">
      <div className="day--header">
        <p className="day--bold">{date}</p>
      </div>
      <div style={{ position: "relative", bottom: "40px" }}>
        <p style={{ fontWeight: "bold", fontSize: "25px" }}>
          High: {high}&deg;F
          <br />
          Low: {low}&deg;F
        </p>
        <p>{weather}</p>
      </div>
    </div>
  );
};

export default ForecastDay;
