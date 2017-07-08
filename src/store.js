import { createStore } from "redux";
import createHistory from "history/createBrowserHistory";
import rootReducer from "./reducers/index";

import events from "./data/events";
import days from "./data/days";

export const history = createHistory();

const defaultState = {
  activeDate: days[0].date,
  days,
  events
};

const store = createStore(
  rootReducer,
  defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
