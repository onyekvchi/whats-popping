import React from "react";
import PropTypes from "prop-types";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import Container from "./../../shared/Container";

import EventsListItem from "./EventsListItem";
import EventsListShimmer from "./EventsListShimmer";
import EventsListStyle from "./EventsList.style";
import moment from "moment";

const EventsList = ({ activeDate, events }) => {
  const filteredEvents = events.filter(event => moment(event.date).format("YYYYMMDD") === activeDate);
  const items = filteredEvents.map(event => (
    <EventsListItem {...event} key={event._id} />
  ));

  return (
    <EventsListStyle>
      <Container size="sm" float="left">
        {events.length > 0 ? (
          <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {items}
          </ReactCSSTransitionGroup>
        ) : (
          <EventsListShimmer />
        )}
      </Container>
    </EventsListStyle>
  );
};

EventsList.propTypes = {
  activeDate: PropTypes.number,
  events: PropTypes.array.isRequired
};

export default EventsList;
