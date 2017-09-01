import React from "react";
import PropTypes from "prop-types";

import EventsHeader from "./EventsHeader";
import EventsList from "./EventsList";
import EventsStyle from "./Events.style";

const Events = ({ days, events, activeDate, setActiveDate }) => {
  return (
    <EventsStyle>
      <EventsHeader
        days={days}
        activeDate={activeDate}
        setActiveDate={setActiveDate}
      />
      <EventsList activeDate={activeDate} events={events} />
    </EventsStyle>
  );
};

Events.propTypes = {
  days: PropTypes.array.isRequired,
  events: PropTypes.array.isRequired,
  activeDate: PropTypes.number,
  setActiveDate: PropTypes.func.isRequired
};

export default Events;
