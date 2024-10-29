import React from 'react';
import { useParams } from 'react-router-dom';

const DetailView = ({ data }) => {
  const { date } = useParams();
  const item = data.find(d => d.date === date);

  if (!item) {
    return <div>Data not found</div>;
  }

  return (
    <div>
      <h1>Detail View for {item.date}</h1>
      <p>Temperature: {item.temp}°C</p>
      <p>Weather: {item.weather}</p>
      <p>Humidity: {item.humidity}%</p>
      <p>Wind Speed: {item.windSpeed} km/h</p>
    </div>
  );
};

export default DetailView;