import React, { useContext } from "react";
import PlacesContext from "../../context/places/placesContext";
import Button from "@material-ui/core/Button";

const ApplyButton = () => {
  const placesContext = useContext(PlacesContext);

  const handleSubmit = () => {
    placesContext.getPlaces();
  };
  return (
    <Button
      className="filter-column-button"
      variant="contained"
      color="primary"
      value="Применить"
      onClick={handleSubmit}
    >
      Применить
    </Button>
  );
};

export default ApplyButton;
