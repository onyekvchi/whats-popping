import React from "react";
import PropType from "prop-types";

import Container from "./../../shared/Container";
import { EventsHeaderStyle, EventsHeaderLinkWrapper } from "./EventsHeader.style";
import EventsHeaderLink from "./EventsHeaderLink";

const EventsHeader = ({ activeDate, days, setActiveDate }) => {
  const links = days.map((day, index) => {
    return (
      <EventsHeaderLink
        day={day}
        key={index}
        active={day === activeDate}
        onClick={setActiveDate.bind(null, day)}
      />
    );
  });

  return (
    <EventsHeaderStyle>
      <Container float="left" size="sm">
        <EventsHeaderLinkWrapper>{links}</EventsHeaderLinkWrapper>
      </Container>
    </EventsHeaderStyle>
  );
};

EventsHeader.propTypes = {
  activeDate: PropType.string,
  days: PropType.array.isRequired,
  setActiveDate: PropType.func.isRequired
};

export default EventsHeader;
