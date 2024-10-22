import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherFilter from './components/WeatherFilter';
import WeatherList from './components/WeatherList';
import WeatherSummary from './components/WeatherSummary';
import bg from './assets/bg.jpg';
const API_KEY = '08225264cb1a4c1ba3661632242210'; // Replace with your valid WeatherAPI key

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [minTemp, setMinTemp] = useState(null);
  const [maxTemp, setMaxTemp] = useState(null);
  const [filter, setFilter] = useState({ min: '', max: '' });

  useEffect(() => {
    axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=Raleigh&days=7`)
      .then(response => {
        const forecastData = response.data.forecast.forecastday;
        const dailyData = forecastData.map(day => ({
          date: day.date,
          temp: day.day.avgtemp_c,
          weather: day.day.condition.text
        }));
        setWeatherData(dailyData);
        const temps = dailyData.map(item => item.temp);
        setMinTemp(Math.min(...temps));
        setMaxTemp(Math.max(...temps));
      })
      .catch(error => console.error('Error fetching weather data:', error));
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter(prevFilter => ({ ...prevFilter, [name]: value }));
  };

  const filteredData = weatherData.filter(item => {
    const temp = item.temp;
    const min = filter.min ? parseFloat(filter.min) : -Infinity;
    const max = filter.max ? parseFloat(filter.max) : Infinity;
    return temp >= min && temp <= max;
  });

  return (
    <div style={{ backgroundImage: {bg}, backgroundSize: 'cover', padding: '20px' }}>
      <h1>Weather Data</h1>
      <WeatherFilter filter={filter} handleFilterChange={handleFilterChange} />
      <WeatherList filteredData={filteredData} />
      <WeatherSummary minTemp={minTemp} maxTemp={maxTemp} />
    </div>
  );
}

export default App;