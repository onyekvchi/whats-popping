import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import createHistory from "history/createBrowserHistory";

import rootReducer from "./reducers/index";
import rootSaga from "./sagas/index";

export const history = createHistory();

const sagaMiddleware = createSagaMiddleware();

const defaultState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  defaultState,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
