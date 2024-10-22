import React from 'react';
import './WeatherList.css';

function WeatherList({ filteredData }) {
    return (
        <div>
            <h2 style={{ color: 'white' }}>Weather by Day</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Temperature (°C)</th>
                        <th>Weather</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.date}</td>
                            <td>{item.temp}°C</td>
                            <td>{item.weather}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default WeatherList;