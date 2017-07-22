import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actionCreators from "../actions/actionCreator";
import DayPicker from "../components/DayPicker";
import EventsList from "../components/EventsList";
import Sidebar from "../components/Sidebar";
import Left from "../components/Left";
import store from "../store";

class App extends Component {
  componentWillMount() {
    store.dispatch({ type: "EVENTS_FETCH_REQUESTED" });
  }

  render() {
    var props = this.props;

    return (
      <div className="app">
        <Left />
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
        <Sidebar {...props} />
      </div>
    );
  }
}

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
