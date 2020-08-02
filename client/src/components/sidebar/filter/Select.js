import React, { useContext, useState, useEffect } from "react";
import PlacesContext from "../../../context/places/placesContext";
import M from "materialize-css/dist/js/materialize.min.js";

const MonthSelect = () => {
  const placesContext = useContext(PlacesContext);
  const { month, setMonth, getParams } = placesContext;
  const [currentMonth, setCurrentMonth] = useState("");

  const monthNames = {
    Jan: "January",
    Feb: "February",
    Mar: "March",
    Apr: "April",
    May: "May",
    Jun: "June",
    Jul: "July",
    Aug: "August",
    Sep: "September",
    Oct: "October",
    Nov: "November",
    Dec: "December",
  };

  useEffect(() => {
    M.AutoInit();
  });

  // get current month short name for default value in Month Select control
  const getCurrentMonthShortName = () => {
    const formatter = new Intl.DateTimeFormat("en", { month: "short" });
    return formatter.format(new Date());
  };

  useEffect(() => {
    const monthShortName = getCurrentMonthShortName();
    setCurrentMonth(monthShortName);
    setMonth(monthShortName);
  }, []);

  useEffect(() => {
    getParams();
  }, [month]);

  const handleChange = (e) => {
    setCurrentMonth(e.target.value);
    setMonth(e.target.value);
    //setTimeout(() => setCurrentParamValue(param.name, value), 1000);
  };

  return (
    <div className="input-field col s12">
      <select onChange={handleChange}>
        {Object.keys(monthNames).map((key) => (
          <option
            value={key}
            selected={key === currentMonth}
            className={key === currentMonth ? "selected" : ""}
          >
            {monthNames[key]}
          </option>
        ))}
      </select>
      <label>Month</label>
    </div>
  );
};

export default MonthSelect;
