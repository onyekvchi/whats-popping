import React from "react";
import moment from "moment";

import CostIcon from "./svg/Cost";
import LocationIcon from "./svg/Location";
import DateIcon from "./svg/Date";
import TimeIcon from "./svg/Time";

const EventContent = ({ event }) => {
  return (
    <div>
      <h1 className="event__title animFadeInUp anim-delay--1">
        {event.title}
      </h1>
      <div className="event__location animFadeInUp anim-delay--2">
        <LocationIcon />
        <span>
          {event.location}
        </span>
      </div>
      <div className="event__date animFadeInUp anim-delay--3">
        <DateIcon />
        <span>
          {moment(event.date, "YYYYMMDD").format("dddd / Do MMMM, YYYY")}
        </span>
      </div>
      <div className="event__time animFadeInUp anim-delay--4">
        <TimeIcon />
        <span>
          {event.startTime}
          {event.endTime ? ` – ${event.endTime}` : ""}{" "}
        </span>
      </div>
      <div className="event__time animFadeInUp anim-delay--5">
        <CostIcon />
        <span>
          {event.price}
        </span>
      </div>
      <div className="hr animFadeIn anim-delay--1" />
      <div className="event__description animFadeIn anim-delay--1">
        <h2 className="event__subtitle">Our two cents</h2>
        <p>
          {event.description}
        </p>
      </div>
    </div>
  );
};

export default EventContent;
