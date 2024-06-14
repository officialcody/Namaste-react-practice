import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100vw",
  height: "400px",
};

const GoogleMaps = ({ latitude, longitude }) => {
  const center = {
    lat: Number(latitude),
    lng: Number(longitude),
  };
  return (
    <LoadScript googleMapsApiKey="AIzaSyBXJZX3csn02Hr2mpVdx72nYMsXHKWRNfk">
      <GoogleMap
        center={center}
        zoom={20}
        mapContainerStyle={mapContainerStyle}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMaps;
