// src/components/Map.js
import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibmF6cnVsLWp1Z2dlcm5heiIsImEiOiJjbGxudWd3c2wwM282M2VvNHI3bWsyY3ViIn0.tIwOlxD2FcESclugJAr98A';

const Map = ({ locationData }) => {
    console.log({locationData});
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
    //   center: [locationData.longitude, locationData.latitude],
      center: [102.172047, 2.456932],
      zoom: 10,
    });
    
    // Add a marker for the location
      new mapboxgl.Marker().setLngLat([101.6942371, 3.1516964]).addTo(map);
  }, [locationData]);

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
};

export default Map;
