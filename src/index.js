import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { injectGlobal } from "styled-components";
import store, { history } from "./store";
import registerServiceWorker from "./registerServiceWorker";
import App from "./containers/App";
import { fonts, common, transitions } from "./styles";

injectGlobal`${fonts} ${common} ${transitions}`;

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
