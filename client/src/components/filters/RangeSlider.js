import React, { Fragment, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import Slider from "rc-slider";
import PlacesContext from "../../context/places/placesContext";
import "rc-slider/assets/index.css";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

const RangeSlider = ({ param, isEnabled }) => {
  const placesContext = useContext(PlacesContext);
  const { setCurrentParamValue } = placesContext;
  const [value, setValue] = useState([]);

  useEffect(() => {
    setValue(param.value);
  }, [param.value, param.isEnabled]);

  const handleChange = (newValue) => {
    console.log("new value is:", newValue);
    setValue(newValue);
    setCurrentParamValue(param.name, newValue);
    // setTimeout(() => setCurrentParamValue(param.name, value), 1000);
  };

  return (
    <Range
      name={param.name}
      value={value}
      min={param.range[0]}
      max={param.range[1]}
      onChange={handleChange}
      disabled={!isEnabled}
      // handle={RangeSliderHandle}
    />
  );
};

RangeSlider.propTypes = {};

export default RangeSlider;
