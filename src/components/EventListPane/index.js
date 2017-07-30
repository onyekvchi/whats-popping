import React from "react";
import DayPicker from "../DayPicker";
import EventsList from "../EventsList";
import EventList from "./EventList";

const EventListPane = props => {
  const isActive = props.location.pathname.split("/")[1] !== "event";
  return (
    <EventList active={isActive}>
      <DayPicker {...props} />
      <EventsList {...props} />
    </EventList>
  );
};

export default EventListPane;
