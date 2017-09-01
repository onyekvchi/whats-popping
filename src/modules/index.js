import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./admin/Auth/Login";
import App from "./app/App";

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" component={App} />
      </Switch>
    );
  }
}

export default Main;
