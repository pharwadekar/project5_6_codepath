import React from 'react';

function WeatherFilter({ filter, handleFilterChange, handleInputChange }) {
    return (
        <div>
            <label>
                Min Temp:
                <input
                    type="range"
                    name="min"
                    min="0"
                    max="100"
                    value={filter.min}
                    onChange={handleFilterChange}
                />
                {filter.min}
            </label>
            <label>
                Max Temp:
                <input
                    type="range"
                    name="max"
                    min="0"
                    max="100"
                    value={filter.max}
                    onChange={handleFilterChange}
                />
                {filter.max}
            </label>
            <label>
                Search:
                <input
                    type="text"
                    name="search"
                    value={filter.search}
                    onChange={handleInputChange}
                />
            </label>
        </div>
    );
}

export default WeatherFilter;