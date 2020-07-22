import React, { useContext } from "react";
import PlacesContext from "../../context/places/placesContext";
import Button from "@material-ui/core/Button";

const ResetButton = () => {
  const placesContext = useContext(PlacesContext);

  const handleReset = () => {
    placesContext.resetParamsValue();
  };
  return (
    <Button
      className="filter-column-button"
      variant="contained"
      value="Применить"
      onClick={handleReset}
    >
      Сбросить
    </Button>
  );
};

export default ResetButton;
