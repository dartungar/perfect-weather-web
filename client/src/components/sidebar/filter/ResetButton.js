import React, { useContext } from "react";
import PlacesContext from "../../../context/places/placesContext";
import Button from "@material-ui/core/Button";

const ResetButton = () => {
  const placesContext = useContext(PlacesContext);

  const handleReset = () => {
    placesContext.resetParamsValue();
  };
  return (
    <a
      className="filter-column-button waves-effect waves-light btn grey lighten-4 blue-grey-text"
      variant="contained"
      value="Reset"
      onClick={handleReset}
    >
      Reset
    </a>
  );
};

export default ResetButton;
