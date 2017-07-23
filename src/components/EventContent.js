import React from "react";
import moment from "moment";

import CostIcon from "./svg/Cost";
import LocationIcon from "./svg/Location";
import DateIcon from "./svg/Date";
import TimeIcon from "./svg/Time";

const EventContent = ({ event }) => {
  return (
    <div className="animFadeIn anim-delay--1">
      <h1 className="event__title">
        {event.title}
      </h1>
      <div className="event__location">
        <LocationIcon />
        <span>
          {event.location}
        </span>
      </div>
      <div className="event__date">
        <DateIcon />
        <span>
          {moment(event.date, "YYYYMMDD").format("dddd / Do MMMM, YYYY")}
        </span>
      </div>
      <div className="event__time">
        <TimeIcon />
        <span>
          {event.startTime}
          {event.endTime ? ` – ${event.endTime}` : ""}{" "}
        </span>
      </div>
      <div className="event__time">
        <CostIcon />
        <span>
          {event.price}
        </span>
      </div>
      <div className="hr animFadeIn anim-delay--1" />
      <div className="event__description animFadeIn">
        <h2 className="event__subtitle">Our two cents</h2>
        <p>
          {event.description}
        </p>
      </div>
    </div>
  );
};

export default EventContent;
