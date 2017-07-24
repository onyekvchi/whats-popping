import React from "react";
import DayPicker from "./DayPicker";
import EventsList from "./EventsList";

const EventListPane = props => {
  const isActive = props.location.pathname.split("/")[1] !== "event";
  return (
    <div className={`event-list ${isActive && "event-list--active"}`}>
      <DayPicker {...props} />
      <EventsList {...props} />
    </div>
  );
};

export default EventListPane;
