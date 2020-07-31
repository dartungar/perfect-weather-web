import React, { useReducer } from "react";
import placesContext from "./placesContext";
import placesReducer from "./placesReducer";
import {
  GET_PLACES,
  CLEAR_PLACES,
  PLACES_ERROR,
  INIT_PARAMS,
  SET_CURRENT_PARAM_VALUE,
  TOGGLE_PARAM,
  RESET_PARAMS_VALUE,
  PARAMS_ERROR,
  SET_MONTH,
} from "../types";

const PlacesState = (props) => {
  const initialState = {
    places: null,
    month: null,
    params: null,
    error: null,
  };

  const [state, dispatch] = useReducer(placesReducer, initialState);

  // get a list of places based on params
  const getPlaces = async () => {
    const getParamsValueByname = (name) => {
      const foundParams = state.params.filter((param) => param.name === name);
      const param = foundParams[0];
      console.log(param);
      if (param.isEnabled === true) {
        return foundParams[0].value;
      } else {
        return [-9999, 99999];
      }
    };

    const simpleParams = {
      month: state.month,
      mean_temp: getParamsValueByname("mean_temp"),
      mean_max_temp: getParamsValueByname("mean_max_temp"),
      humidity: getParamsValueByname("humidity"),
      precipitation_monthly: getParamsValueByname("precipitation_monthly"),
      sunshine_hours: getParamsValueByname("sunshine_hours"),
    };

    console.log(simpleParams);

    try {
      const res = await fetch("/api/places", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(simpleParams),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      dispatch({ type: GET_PLACES, payload: data });
    } catch (error) {
      dispatch({ type: PLACES_ERROR, payload: error });
    }
  };

  // clear list of places
  const clearPlaces = () => {
    dispatch({ type: CLEAR_PLACES });
  };

  // set parameters range
  const getParams = async (month = state.month) => {
    try {
      const res = await fetch(`/api/params?month=${month}`);
      const data = await res.json();
      dispatch({ type: INIT_PARAMS, payload: data });
    } catch (error) {
      dispatch({ type: PARAMS_ERROR, payload: error });
    }
  };

  // set current parameters
  const setCurrentParamValue = (name, value) => {
    console.log("changing param value:", name, value);
    dispatch({ type: SET_CURRENT_PARAM_VALUE, payload: { name, value } });
  };

  // set month
  const setMonth = (month) => {
    dispatch({ type: SET_MONTH, payload: month });
  };

  // toggle parameter
  const toggleParam = (name) => {
    dispatch({ type: TOGGLE_PARAM, payload: { name } });
  };

  // clear current parameters
  const resetParamsValue = () => {
    dispatch({ type: RESET_PARAMS_VALUE });
  };

  return (
    <placesContext.Provider
      value={{
        places: state.places,
        month: state.month,
        params: state.params,
        error: state.error,
        getPlaces,
        clearPlaces,
        getParams,
        setCurrentParamValue,
        setMonth,
        toggleParam,
        resetParamsValue,
      }}
    >
      {props.children}
    </placesContext.Provider>
  );
};

export default PlacesState;
