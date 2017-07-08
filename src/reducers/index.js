import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import activeDate from "./activeDate";
import days from "./days";
import events from "./events";

const rootReducer = combineReducers({
  activeDate,
  days,
  events,
  router: routerReducer
});

export default rootReducer;
