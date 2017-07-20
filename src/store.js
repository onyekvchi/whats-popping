import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import createHistory from "history/createBrowserHistory";

import rootReducer from "./reducers/index";
import rootSaga from "./sagas/index";

// import events from "./data/events";
// import days from "./data/days";

export const history = createHistory();

const sagaMiddleware = createSagaMiddleware();

const defaultState = {
	activeDate: null,
	days: [],
	events: []
};

const store = createStore(
	rootReducer,
	defaultState,
	applyMiddleware(sagaMiddleware),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

sagaMiddleware.run(rootSaga);

export default store;
