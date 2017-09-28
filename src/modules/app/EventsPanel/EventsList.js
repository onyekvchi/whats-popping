import React from "react";
import PropTypes from "prop-types";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import Container from "./../../shared/Container";

import EventsListItem from "./EventsListItem";
import EventsListShimmer from "./EventsListShimmer";
import EventsListStyle from "./EventsList.style";
import moment from "moment";

const EventsList = ({ activeDate, events, loading, error }) => {

  const filteredEvents = events.filter(
    event => moment(event.date).format("YYYYMMDD") === activeDate
  );
  const items = filteredEvents.map(event => (
    <EventsListItem {...event} key={event._id} />
  ));

  return (
    <EventsListStyle>
      <Container size="sm" float="left">
        {error ? (
          "There was an error loading the events"
        ) : loading ? (
          <EventsListShimmer />
        ) : events.length === 0 ? (
          "Looks like there are no events yet"
        ) : (
          <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {items}
          </ReactCSSTransitionGroup>
        )}
      </Container>
    </EventsListStyle>
  );
};

EventsList.propTypes = {
  activeDate: PropTypes.string,
  events: PropTypes.array.isRequired,
  error: PropTypes.bool,
  loading: PropTypes.bool
};

export default EventsList;
