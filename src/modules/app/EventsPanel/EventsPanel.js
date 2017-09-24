import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import CSSTransitionGroup from "react-addons-css-transition-group";

import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Events from "./Events";
import Event from "./Event";

import Side from "./../../shared/Side";
import * as actionCreators from "./../../../actions/actionCreator";
import store from "./../../../store";

class EventsPanel extends Component {
  componentWillMount() {
    this.props.loadEvents();
  }

  render() {
    return (
      <Side float="right">
        <Route
          render={({ location }) => (
            <CSSTransitionGroup
              transitionName="fade"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
            >
              <Switch key={location.key} location={location}>
                <Route
                  path="/event/:id"
                  render={rProps => renderEvent(rProps, this.props)}
                  exact
                />
                <Route path="/" render={() => renderEvents(this.props)} />
              </Switch>
            </CSSTransitionGroup>
          )}
        />
      </Side>
    );
  }
}

const renderEvents = ({ days, events, activeDate, setActiveDate, loading, error }) => {
  return (
    <Events
      days={days}
      events={events}
      activeDate={activeDate}
      setActiveDate={setActiveDate}
      loading={loading}
      error={error}
    />
  );
};

const renderEvent = ({ match }, { events }) => {
  const props = { id: match.params.id };
  props.event = events.find(event => event._id === match.params.id);

  return <Event {...props} />;
};

function mapStateToProps(state) {
  return {
    events: state.events,
    days: state.days,
    activeDate: state.activeDate,
    loading: state.loading,
    error: state.error
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EventsPanel)
);
