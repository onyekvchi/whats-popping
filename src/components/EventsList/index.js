import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import EventItem from "../EventItem";
import EventsListShimmer from "../EventsListShimmer";
import Container from "../Container";
import Events from "./Events";

const EventsList = ({ activeDate, events }) => {
  const filteredEvents = events.filter(event => event.date === activeDate);
  const items = filteredEvents.map(event =>
    <EventItem {...event} key={event._id} />
  );
  return (
    <Events>
      <Container size="sm" float="left">
        {events.length > 0
          ? <ReactCSSTransitionGroup
              transitionName="fade"
              transitionAppear={true}
              transitionAppearTimeout={300}
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
            >
              {items}
            </ReactCSSTransitionGroup>
          : <EventsListShimmer />}
      </Container>
    </Events>
  );
};

export default EventsList;
