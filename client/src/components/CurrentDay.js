import React from "react";

// represents the report for the present date
const CurrentDay = ({ data, getDate }) => {
  return (
    <div>
      {data && (
        <div>
          <p>{getDate(data.pubDate)}</p>
          <p style={{ fontWeight: "bold", fontSize: "25px" }}>
            {data.condition.temperature}&deg;F
          </p>
          <p>{data.condition.text}</p>
          <p>
            Sunrise: {data.astronomy.sunrise}
            <br />
            Sunset: {data.astronomy.sunset}
          </p>
          <p>Humidity: {data.atmosphere.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default CurrentDay;
