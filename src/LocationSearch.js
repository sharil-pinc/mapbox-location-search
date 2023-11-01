// src/components/LocationSearch.js
import React, { useState } from 'react';
import axios from 'axios';

const LocationSearch = ({ onLocationSelected }) => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const accessToken = process.env.REACT_APP_MAPBOX_TOKEN;  //'pk.eyJ1IjoibmF6cnVsLWp1Z2dlcm5heiIsImEiOiJjbGxudWd3c2wwM282M2VvNHI3bWsyY3ViIn0.tIwOlxD2FcESclugJAr98A';
    
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${accessToken}`
      );
        setSearchResults(response.data.features);
        console.log({data: response.data.features});
    } catch (error) {
      console.error('Error searching for locations:', error);
    }
  };

  const handleSelectLocation = (location) => {
    onLocationSelected(location);
    setSearchResults([]);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a location"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map((location) => (
          <li
            key={location.id}
            onClick={() => handleSelectLocation(location)}
            style={{ cursor: 'pointer' }}
          >
            {location.place_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationSearch;
