import React, { useContext, useState, useEffect } from "react";
import PlacesContext from "../../context/places/placesContext";
import Select from "./Select";
import RangeFilter from "./RangeFilter";
import ResetButton from "./ResetButton";
import ApplyButton from "./ApplyButton";

const FilterColumn = () => {
  const placesContext = useContext(PlacesContext);
  const { getParams, params } = placesContext;

  // fetch range values for filters on page load
  useEffect(() => {
    console.log("setting filters!");
    getParams();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="filters-column">
      <Select />
      {params &&
        params.map((p, index) => <RangeFilter param={p} key={index} />)}
      <ResetButton />
      <ApplyButton />
    </div>
  );
};

export default FilterColumn;
