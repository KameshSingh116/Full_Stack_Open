// src/CountryInfo.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountryInfo = ({ country }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      if (!country.capital) return;

      try {
        const capital = country.capital[0];
        const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
        const weatherResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}&units=metric`
        );
        setWeather(weatherResponse.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setWeather(null);
      }
    };

    fetchWeather();
  }, [country]);

  return (
    <div>
      <h3>Weather in {country.capital[0]}</h3>
      {weather ? (
        <div>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt={weather.weather[0].description}
          />
        </div>
      ) : (
        <p>Weather data not available</p>
      )}
    </div>
  );
};

export default CountryInfo;
