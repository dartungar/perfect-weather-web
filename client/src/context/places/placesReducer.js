import {
  GET_PLACES,
  CLEAR_PLACES,
  PLACES_ERROR,
  PARAMS_ERROR,
  INIT_PARAMS,
  SET_CURRENT_PARAM_VALUE,
  RESET_PARAMS_VALUE,
  SET_MONTH,
  TOGGLE_PARAM,
} from "../types";

const placesReducer = (state, action) => {
  switch (action.type) {
    case GET_PLACES:
      return {
        ...state,
        places: action.payload,
      };
    case CLEAR_PLACES:
      return { ...state, places: [] };
    case PLACES_ERROR:
    case PARAMS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case INIT_PARAMS:
      return {
        ...state,
        params: action.payload.map((param) => ({
          name: param.name,
          title: param.title,
          range: param.range,
          value: param.range,
          coverage: param.coverage,
          isEnabled: true,
        })),
      };
    case SET_CURRENT_PARAM_VALUE:
      return {
        ...state,
        params: state.params.map((p) => {
          if (p.name === action.payload.name) {
            return {
              ...p,
              value: action.payload.value,
            };
          } else {
            return p;
          }
        }),
      };
    case SET_MONTH:
      return {
        ...state,
        month: action.payload,
      };
    case TOGGLE_PARAM:
      return {
        ...state,
        params: state.params.map((p) => {
          if (p.name === action.payload.name) {
            return {
              ...p,
              isEnabled: !p.isEnabled,
            };
          } else {
            return p;
          }
        }),
      };
    case RESET_PARAMS_VALUE:
      return {
        ...state,
        params: state.params.map((p) => ({
          ...p,
          value: p.range,
        })),
      };
    default:
      return state;
  }
};

export default placesReducer;
