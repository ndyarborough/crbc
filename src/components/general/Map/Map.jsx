import './Map.scss';
import React, { useState, useRef } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const apiKey = 'AIzaSyCC5MD5CHXnktV_3zR8nCwQ05whhAA7mjU';

// Example position, you can change it based on your needs
const position = { lat: 35.8659129, lng: -78.68131592 };

function Map() {
  // Use Vite's method for accessing environment variables
  
  console.log(apiKey)

  const [selected, setSelected] = useState(position); // Start with the marker's position selected
  const mapRef = useRef(null);

  const handleMarkerClick = () => {
    setSelected(position);
  };

  const handleOverlayClose = () => {
    setSelected(null);
  };

  const markerIcon = {
    url: '/path/to/icon.png', // Example: Replace with actual path to your icon
    scaledSize: window.google ? new window.google.maps.Size(50, 50) : null,
  };

  return (
    <div className='map'>
      <div className='map-banner'>
        <h3>6001 CREEDMOOR ROAD, RALEIGH NC, 27612</h3>
      </div>
      <div className="map-container">
        <LoadScript googleMapsApiKey={apiKey}>
          <GoogleMap
            mapContainerClassName="google-map"
            center={position}
            zoom={16.8}
            onLoad={(map) => (mapRef.current = map)}
          >
            <Marker
              position={position}
              icon={markerIcon}
              onClick={handleMarkerClick}
            />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}

export default Map;
