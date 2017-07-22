import React from "react";
import { Link } from "react-router-dom";

import LocationIcon from "./svg/Location";
import TimeIcon from "./svg/Time";
import CostIcon from "./svg/Cost";

const EventItem = ({ _id, title, location, startTime, endTime, price }) => {
  return (
    <li className="event-item">
      <Link to={`/event/${_id}`}>
        <h2 className="event-item__title">
          {title}
        </h2>
      </Link>
      <div className="event-item__location">
        <LocationIcon />
        <span>
          {location}
        </span>
      </div>
      <div className="event-item__time-price-wrap">
        <div className="event-item__time">
          <TimeIcon />
          <span>
            {`${startTime} ${endTime ? " – " + endTime : ""}`}
          </span>
        </div>
        <div className="event-item__price">
          <CostIcon />
          <span>
            {price}
          </span>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
