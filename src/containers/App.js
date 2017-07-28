import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actionCreators from "../actions/actionCreator";
import Left from "../components/Left";
import Right from "../components/Right";
import MobileToggler from "../components/MobileToggler";
import store from "../store";

class App extends Component {
  componentWillMount() {
    store.dispatch({ type: "EVENTS_FETCH_REQUESTED" });
  }

  render() {
    var props = this.props;

    return (
      <div className="app">
        <Left {...props} />
        <Right {...props} />
        <MobileToggler {...props} />
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
