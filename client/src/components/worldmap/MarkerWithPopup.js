import React from "react";
import PropTypes from "prop-types";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

const customIcon = L.icon({
  iconUrl: "./customIcon.svg",
  iconSize: [28, 28],
});

const MarkerWithPopup = ({
  place: {
    name,
    iwmo,
    latitude,
    longitude,
    mean_temp,
    mean_max_temp,
    humidity,
    precipitation_monthly,
    sunshine_hours,
  },
}) => {
  return (
    <Marker position={[latitude, longitude]} icon={customIcon} title={name}>
      <Popup>
        <h5>{name}</h5>
        <table className="highlight">
          <tbody>
            <tr>
              <td>Meteo Station ID</td>
              <td>{iwmo}</td>
            </tr>
            <tr>
              <td>Avg. temperature</td>
              <td>{mean_temp} C</td>
            </tr>
            <tr>
              <td>Avg. max.temperature</td>
              <td>{mean_max_temp} C</td>
            </tr>
            <tr>
              <td>Avg. humidity</td>
              <td>{humidity}%</td>
            </tr>
            <tr>
              <td>Total precipitation that month</td>
              <td>{precipitation_monthly}mm</td>
            </tr>
            <tr>
              <td>Total hours of sunshine that month</td>
              <td>{sunshine_hours}</td>
            </tr>
          </tbody>
        </table>
        {/* <p>
          Meteo Station ID: <b>{iwmo}</b>{" "}
        </p>
        <p>
          Avg. temperature: <b>{mean_temp}</b>{" "}
        </p>
        <p>
          Avg. max.temperature: <b>{mean_max_temp}</b>
        </p>
        <p>
          Avg. humidity: <b>{humidity}</b>
        </p>
        <p>
          Total precipitation that month: <b>{precipitation_monthly}</b>
        </p>
        <p>
          Total hours of sunshine that month: <b>{sunshine_hours}</b>
        </p> */}
      </Popup>
    </Marker>
  );
};

MarkerWithPopup.propTypes = {};

export default MarkerWithPopup;
