import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Event from "./Event";
import Events from "./Events";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "./actions/actionCreator";

const App = props => {
  return (
    <div className="app">
      <div className="side side--left">
        <div className="site">
          <div className="container container--sm">
            <h1 className="site__title">
              What‘s<br />Popping?
            </h1>
            <div className="site__divider" />
            <p className="site__description">
              All the events worth looking out for this weekend in Lagos.
            </p>
          </div>
        </div>
      </div>
      <div className="side side--right">
        <Switch key={props.location.pathname} location={props.location}>
          <Route
            exact
            path="/"
            render={routerProps => <Events {...{ ...routerProps, ...props }} />}
          />
          <Route
            path="/event/:id"
            render={routerProps =>
              <Event {...{ ...routerProps, events: props.events }} />}
          />
        </Switch>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    events: state.events,
    days: state.days,
    activeDate: state.activeDate
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
