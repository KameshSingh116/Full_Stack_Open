// src/App.jsx
import React, { useState } from 'react';
import axios from 'axios';
import CountryInfo from './CountryInfo';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [message, setMessage] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSearch = async (event) => {
    event.preventDefault();
    if (!searchQuery) return;

    try {
      const response = await axios.get(
        `https://studies.cs.helsinki.fi/restcountries/api/name/${searchQuery}`
      );
      const data = response.data;

      if (data.length > 10) {
        setMessage('Too many matches, specify another filter');
        setCountries([]);
      } else if (data.length > 1) {
        setMessage('');
        setCountries(data);
      } else {
        setMessage('');
        setCountries([data[0]]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setMessage('No countries found');
      setCountries([]);
    }
  };

  const handleShowDetails = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      <h2>Country Information</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for a country"
        />
        <button type="submit">Search</button>
      </form>
      {message && <p>{message}</p>}
      {countries.length > 1 && (
        <ul>
          {countries.map((country) => (
            <li key={country.name}>
              {country.name}
              <button onClick={() => handleShowDetails(country)}>Show</button>
            </li>
          ))}
        </ul>
      )}
      {countries.length === 1 && (
        <div>
          <h3>{countries[0].name}</h3>
          <p>Capital: {countries[0].capital}</p>
          <p>Area: {countries[0].area} km²</p>
          <img
            src={countries[0].flags[0]}
            alt={`Flag of ${countries[0].name}`}
            width="100"
          />
          <h4>Languages:</h4>
          <ul>
            {countries[0].languages.map((language) => (
              <li key={language.name}>{language.name}</li>
            ))}
          </ul>
        </div>
      )}
      {selectedCountry && <CountryInfo country={selectedCountry} />}
    </div>
  );
};

export default App;
