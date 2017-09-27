import React from "react";
import moment from "moment";
import PropTypes from "prop-types";

import EventsHeaderLinkStyle from "./EventsHeaderLink.style";

const EventsHeaderLink = ({ active, day, onClick }) => {
  return (
    <EventsHeaderLinkStyle active={active} onClick={onClick} key={day}>
      {moment(day, "YYYYMMDD").format("ddd")} / &nbsp;
      {moment(day, "YYYYMMDD").format("MMM DD")}
    </EventsHeaderLinkStyle>
  );
};

EventsHeaderLink.propTypes = {
    active: PropTypes.bool.isRequired,
    day: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired 
}

export default EventsHeaderLink;
