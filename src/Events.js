import React from "react";
import DayPicker from "./DayPicker";
import EventsList from "./EventsList";

const Events = props => {
  return (
    <div className="full-height">
      <DayPicker {...props} />
      <EventsList {...props} />
    </div>
  );
};

export default Events;
