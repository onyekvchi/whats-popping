import React from "react";
import EventItem from "./EventItem";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const EventsList = ({ activeDate, events }) => {
  const filteredEvents = events.filter(event => event.date === activeDate);
  const items = filteredEvents.map(event =>
    <EventItem {...event} key={event.id} />
  );
  return (
    <div className="events">
      <ul className="container container--sm">
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {items}
        </ReactCSSTransitionGroup>
      </ul>
    </div>
  );
};

export default EventsList;
