import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Page from "../shared/Page";
import Login from "./Auth/Login";
import Events from "./Events/Events";

class Admin extends Component {
  render() {
    return (
      <Page>
        <Switch>
          <Route path="/vip/events" component={Events} />
          <Route path="/vip" component={Login} />
        </Switch>
      </Page>
    );
  }
}

export default Admin;
