import React, { useContext, useState, useEffect } from "react";
import PlacesContext from "../../../context/places/placesContext";
import Select from "./Select";
import RangeControlGroup from "./RangeControlGroup";
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

  // create control for every param that is fetched from API
  return (
    <div className="filters-column">
      <Select />
      {params &&
        params.map((p, index) => <RangeControlGroup param={p} key={index} />)}
      <ResetButton />
      <ApplyButton />
    </div>
  );
};

export default FilterColumn;
