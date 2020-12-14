import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ data }) => {
  const mapStyle = {
    height: '50vh',
    width: '100w',
  };

  const defaultCebter = data;

  return (
    <LoadScript googleMapsApiKey="AIzaSyDF78nvp0Yn48-b-JHyL4HAz4JuNFJZZoU">
      <GoogleMap mapContainerStyle={mapStyle} zoom={9} center={defaultCebter}>
        <Marker position={defaultCebter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
