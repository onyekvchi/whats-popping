import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Admin from "./admin/Admin";
import App from "./app/App";

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route path="/vip" component={Admin} />
        <Route path="/" component={App} />
      </Switch>
    );
  }
}

export default Main;
