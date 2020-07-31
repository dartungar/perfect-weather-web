import React, { useContext, useEffect } from "react";
import { Map, TileLayer, ZoomControl } from "react-leaflet";
import MarkerWithPopup from "./MarkerWithPopup";
import PlacesContext from "../../context/places/placesContext";
import Leaflet from "leaflet";

const Worldmap = () => {
  const placesContext = useContext(PlacesContext);
  const { params, places } = placesContext;

  // Set map bounds.
  // Allow scroll over the international date line, so users can comfortably zoom into locations near the date line.
  const corner1 = Leaflet.latLng(-80, -250);
  const corner2 = Leaflet.latLng(90, 250);
  const bounds = Leaflet.latLngBounds(corner1, corner2);

  useEffect(() => {
    if (params) {
      placesContext.getPlaces();
    }
  }, []);

  return (
    <Map
      className="map-container"
      center={[30, 0]}
      zoom={3}
      minZoom={3}
      worldCopyJump={true}
      zoomControl={false}
      maxBoundsViscosity={1.0}
      maxBounds={bounds}
    >
      <ZoomControl position="topright" />{" "}
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places && places.map((place) => <MarkerWithPopup place={place} />)}
    </Map>
  );
};

export default Worldmap;
