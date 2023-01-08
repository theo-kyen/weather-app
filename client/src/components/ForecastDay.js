import React from "react";

// represents a single day of the forecast
const ForecastDay = ({ date, high, low, weather }) => {
  return (
    <div style={{ width: "100%", border: "1px solid black" }}>
      <div
        style={{
          backgroundColor: "lightgray",
          position: "relative",
          bottom: "16.5px",
        }}
      >
        <p style={{ fontWeight: "bold" }}>{date}</p>
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
