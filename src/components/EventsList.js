import React from "react";
import EventItem from "./EventItem";
import EventsListShimmer from "./EventsListShimmer";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const EventsList = ({ activeDate, events }) => {
  const filteredEvents = events.filter(event => event.date === activeDate);
  const items = filteredEvents.map(event =>
    <EventItem {...event} key={event._id} />
  );
  return (
    <div className="events">
      <ul className="container container--sm container--float-left">
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
      </ul>
    </div>
  );
};

export default EventsList;
