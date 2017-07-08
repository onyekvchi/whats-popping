import React from "react";
import EventItem from "./EventItem";

const EventsList = ({ events }) => {
  return (
    <div className="events">
      <ul className="container container--sm">
        {events.map(event => <EventItem {...event} key={event.id} />)}
      </ul>
    </div>
  );
};

export default EventsList;
