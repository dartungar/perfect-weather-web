import React, { useContext } from "react";
import PlacesContext from "../../context/places/placesContext";

const ApplyButton = () => {
  const placesContext = useContext(PlacesContext);

  const handleSubmit = () => {
    placesContext.getPlaces();
  };
  return (
    <a
      className="filter-column-button waves-effect waves-light btn cyan darken-1"
      variant="contained"
      color="primary"
      value="Применить"
      onClick={handleSubmit}
    >
      Применить
    </a>
  );
};

export default ApplyButton;
