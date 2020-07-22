import React from "react";
import PropTypes from "prop-types";
import { Marker, Popup } from "react-leaflet";

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
    <Marker position={[latitude, longitude]}>
      <Popup>
        <h4>{name}</h4>
        <p>
          IWMO: <b>{iwmo}</b>{" "}
        </p>
        <p>
          Сред.температура: <b>{mean_temp}</b>{" "}
        </p>
        <p>
          Сред.дневная температура: <b>{mean_max_temp}</b>
        </p>
        <p>
          Сред. влажность: <b>{humidity}</b>
        </p>
        <p>
          Осадков в месяц, мм: <b>{precipitation_monthly}</b>
        </p>
        <p>
          Часов солнечного света в месяц: <b>{sunshine_hours}</b>
        </p>
      </Popup>
    </Marker>
  );
};

MarkerWithPopup.propTypes = {};

export default MarkerWithPopup;
