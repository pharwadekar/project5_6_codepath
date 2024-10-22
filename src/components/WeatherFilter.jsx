import React from 'react';

function WeatherFilter({ filter, handleFilterChange }) {
  return (
    <div>
      <label>
        Min Temp:
        <input type="number" name="min" value={filter.min} onChange={handleFilterChange} />
      </label>
      <label>
        Max Temp:
        <input type="number" name="max" value={filter.max} onChange={handleFilterChange} />
      </label>
    </div>
  );
}

export default WeatherFilter;