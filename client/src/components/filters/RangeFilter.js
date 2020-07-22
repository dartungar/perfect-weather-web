import React, { Fragment, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Switch from "@material-ui/core/Switch";
import PlacesContext from "../../context/places/placesContext";

const RangeFilter = ({ param }) => {
  const placesContext = useContext(PlacesContext);
  const { setCurrentParamValue, toggleParam } = placesContext;
  const [value, setValue] = useState([]);
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    setValue(param.value);
    setIsEnabled(param.isEnabled);
  }, [param.value, param.isEnabled]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
    setCurrentParamValue(param.name, newValue);
    //setTimeout(() => setCurrentParamValue(param.name, value), 1000);
  };

  const handleCheck = (e) => {
    setIsEnabled(!isEnabled);
    toggleParam(param.name);
  };

  return (
    <div className="control-item">
      <Typography id="range-slider" gutterBottom>
        {param.title}
      </Typography>
      <Switch
        checked={isEnabled}
        value={isEnabled}
        onChange={handleCheck}
        color="primary"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <span>
        {param.coverage.toLocaleString(undefined, {
          style: "percent",
          minimumFractionDigits: 0,
        })}{" "}
        заполнено
      </span>
      <Slider
        name={param.name}
        value={value}
        min={param.range[0]}
        max={param.range[1]}
        onChange={handleChange}
        disabled={!isEnabled}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
    </div>
  );
};

RangeFilter.propTypes = {
  param: PropTypes.object.isRequired,
};

export default RangeFilter;
