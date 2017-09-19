import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Page from "../shared/Page";
import Login from "./Auth/Login";
import Events from "./Events/Events";
import { Auth } from "../../utils";
import { Redirect } from "react-router-dom";

class Admin extends Component {
  render() {
    return (
      <Page>
        <Switch>
          <Route path="/vip/events" component={authEventsOrRedirect} />
          <Route path="/vip" component={Login} />
        </Switch>
      </Page>
    );
  }
}

const authEventsOrRedirect = () =>
  Auth.isAdminLoggedIn() ? <Events /> : <Redirect to="/vip?redirected=true" />;

export default Admin;
