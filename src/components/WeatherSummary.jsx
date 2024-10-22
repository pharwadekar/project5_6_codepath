import React from 'react';

function WeatherSummary({ minTemp, maxTemp }) {
  return (
    <div>
      <p>Min Temp: {minTemp}°C</p>
      <p>Max Temp: {maxTemp}°C</p>
    </div>
  );
}

export default WeatherSummary;