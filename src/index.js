import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { injectGlobal, ThemeProvider } from "styled-components";
import store, { history } from "./store";
import registerServiceWorker from "./registerServiceWorker";
import App from "./modules/index";
import { common, transitions } from "./styles";
import patterns from "./patterns";

const colors = [
  "#63EB85",
  "#00F4FF",
  "#EB636A",
  "#636EEB",
  "#7863EB",
  "#63DCEB",
  "#EB6387",
  "#63EB85",
  "#EAF36F"
];

const theme = {
  background: colors[Math.floor(Math.random() * colors.length)],
  pattern: patterns[Math.floor(Math.random() * patterns.length)],
  serif: "TiemposWeb, 'Playfair Display', Georgia",
  sansSerif: "SofiaWeb, 'Helvetica Neue', 'Circular Std', Roboto, Arial"
};

injectGlobal`${common} ${transitions}`;

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
