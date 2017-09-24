import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

function activeDate(state = "", action) {
  switch (action.type) {
    case "SET_ACTIVE_DATE":
      return action.payload;
    case "EVENTS_FETCH_SUCCEEDED":
      return action.payload.days[0] || state;
    default:
      return state;
  }
}

function days(state = [], action) {
  switch (action.type) {
    case "EVENTS_FETCH_SUCCEEDED":
      return action.payload.days;
    default:
      return state;
  }
}

function events(state = [], action) {
  switch (action.type) {
    case "EVENTS_FETCH_SUCCEEDED":
      return action.payload.events;
    default:
      return state;
  }
}

function loading(state = false, action) {
  return action.type === "EVENTS_FETCH_REQUESTED" || false;
}

function error(state = false, action) {
  return action.type === "EVENTS_FETCH_FAILED" || false;
}

const rootReducer = combineReducers({
  activeDate,
  days,
  events,
  error,
  loading,
  router: routerReducer
});

export default rootReducer;
