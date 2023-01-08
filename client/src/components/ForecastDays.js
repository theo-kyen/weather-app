import ForecastDay from "./ForecastDay";

// represents the table for the 7-day forecast
const ForecastDays = ({ data, getDate }) => {
  return (
    <div className="div">
      {data &&
        data.map((day, i) => {
          return (
            <ForecastDay
              key={i}
              date={getDate(day.date)}
              high={day.high}
              low={day.low}
              weather={day.text}
            />
          );
        })}
    </div>
  );
};

export default ForecastDays;
