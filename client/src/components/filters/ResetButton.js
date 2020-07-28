import React, { useContext } from "react";
import PlacesContext from "../../context/places/placesContext";
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
      value="Применить"
      onClick={handleReset}
    >
      Сбросить
    </a>
  );
};

export default ResetButton;
