import React from "react";
import moment from "moment";

import FadeIn from "../FadeIn";

import CostIcon from "../svg/Cost";
import LocationIcon from "../svg/Location";
import DateIcon from "../svg/Date";
import TimeIcon from "../svg/Time";

import {
  EventTitle,
  EventSubTitle,
  EventDetail,
  EventIcon,
  EventDivider,
  EventDescription
} from "./EventContent";

const EventContent = ({ event }) => {
  return (
    <FadeIn delay="200ms">
      <EventTitle>
        {event.title}
      </EventTitle>
      <EventDetail>
        <EventIcon>
          <LocationIcon />
        </EventIcon>
        <div>
          {event.location}
        </div>
      </EventDetail>
      <EventDetail>
        <EventIcon>
          <DateIcon />
        </EventIcon>
        <div>
          {moment(event.date, "YYYYMMDD").format("dddd / Do MMMM, YYYY")}
        </div>
      </EventDetail>
      <EventDetail>
        <EventIcon>
          <TimeIcon />
        </EventIcon>
        <div>
          {event.startTime}
          {event.endTime ? ` – ${event.endTime}` : ""}
        </div>
      </EventDetail>
      <EventDetail>
        <EventIcon>
          <CostIcon />
        </EventIcon>
        <div>
          {event.price}
        </div>
      </EventDetail>
      <FadeIn delay="200ms">
        <EventDivider />
      </FadeIn>
      <FadeIn delay="200ms">
        <EventSubTitle>Our two cents</EventSubTitle>
        <EventDescription>
          {event.description}
        </EventDescription>
      </FadeIn>
    </FadeIn>
  );
};

export default EventContent;
