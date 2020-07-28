import React, { Fragment, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import PlacesContext from "../../context/places/placesContext";
import RangeSlider from "./RangeSlider";

const RangeControlGroup = ({ param }) => {
  const placesContext = useContext(PlacesContext);
  const { toggleParam } = placesContext;
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    setIsEnabled(param.isEnabled);
  }, [param.isEnabled]);

  const handleCheck = () => {
    setIsEnabled(!isEnabled);
    toggleParam(param.name);
  };

  return (
    <div className="control-item">
      <div
        class="switch"
        title={isEnabled ? "выключить фильтр" : "включить фильтр"}
      >
        <label>
          <input
            type="checkbox"
            checked={isEnabled}
            value={isEnabled}
            onChange={handleCheck}
            className="switch"
          />
          <span className="lever"></span>
        </label>
      </div>
      <i
        className="material-icons"
        title={`Есть данные по ${param.coverage * 100}% метеостанций`}
      >
        info
      </i>
      <span id="range-slider">{param.title}</span>

      <RangeSlider param={param} isEnabled={isEnabled} />
    </div>
  );
};

RangeControlGroup.propTypes = {
  param: PropTypes.object.isRequired,
};

export default RangeControlGroup;
