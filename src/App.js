import React, { useState } from 'react';
import Map from './Map';
import LocationSearch from './LocationSearch';
import './App.css';

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <div className="App">
      <h1>Mapbox Location Search</h1>
      <LocationSearch onLocationSelected={setSelectedLocation} />
      {selectedLocation && <Map locationData={selectedLocation.center} />}
    </div>
  );
}

export default App;
