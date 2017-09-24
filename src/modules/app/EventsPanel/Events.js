import React from "react";
import PropTypes from "prop-types";

import EventsHeader from "./EventsHeader";
import EventsList from "./EventsList";
import EventsStyle from "./Events.style";

const Events = ({ days, events, activeDate, setActiveDate, loading, error }) => {
  return (
    <EventsStyle>
      <EventsHeader
        days={days}
        activeDate={activeDate}
        setActiveDate={setActiveDate}
      />
      <EventsList activeDate={activeDate} events={events} error={error} loading={loading} />
    </EventsStyle>
  );
};

Events.propTypes = {
  days: PropTypes.array.isRequired,
  events: PropTypes.array.isRequired,
  activeDate: PropTypes.string,
  setActiveDate: PropTypes.func.isRequired,
  error: PropTypes.bool,
  loading: PropTypes.bool
};

export default Events;
