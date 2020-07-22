import React, { useContext, useState, useEffect } from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import PlacesContext from "../../context/places/placesContext";

const MonthSelect = () => {
  const placesContext = useContext(PlacesContext);
  const { month, setMonth, getParams } = placesContext;
  const [currentMonth, setCurrentMonth] = useState("");

  const monthNames = {
    Jan: "Январь",
    Feb: "Февраль",
    Mar: "Март",
    Apr: "Апрель",
    May: "Май",
    Jun: "Июнь",
    Jul: "Июль",
    Aug: "Август",
    Sep: "Сентябрь",
    Oct: "Октябрь",
    Nov: "Ноябрь",
    Dec: "Декабрь",
  };

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
    <div className="control-item">
      <FormControl>
        <InputLabel id="month-select-label">Месяц</InputLabel>
        <Select
          labelId="month-select-label"
          id="month-select"
          value={currentMonth}
          onChange={handleChange}
        >
          {Object.keys(monthNames).map((key) => (
            <MenuItem value={key}>{monthNames[key]}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default MonthSelect;
