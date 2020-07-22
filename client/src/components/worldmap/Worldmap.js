import React, { useContext, useEffect } from "react";
import { Map, TileLayer } from "react-leaflet";
import MarkerWithPopup from "./MarkerWithPopup";
import PlacesContext from "../../context/places/placesContext";

const Worldmap = () => {
  const placesContext = useContext(PlacesContext);
  const { params, places } = placesContext;

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
    >
      {" "}
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places && places.map((place) => <MarkerWithPopup place={place} />)}
    </Map>
  );
};

export default Worldmap;
