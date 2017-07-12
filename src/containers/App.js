import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actionCreators from "../actions/actionCreator";
import Event from "../components/Event";
import DayPicker from "../components/DayPicker";
import EventsList from "../components/EventsList";
import Sidebar from "../components/Sidebar";

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
        <Route
          path="/"
          render={routerProps =>
            <div className="full-height">
              <DayPicker {...{ ...routerProps, ...props }} />
              <EventsList {...{ ...routerProps, ...props }} />
            </div>}
        />
      </div>
      <Sidebar isActive={props.location.pathname.split("/")[1] === "event"}>
        <Switch key={props.location.pathname} location={props.location}>
          <Route
            exact
            path="/event/:id"
            render={routerProps =>
              <Event event={props.events[routerProps.match.params.id - 1]} />}
          />
        </Switch>
      </Sidebar>
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
