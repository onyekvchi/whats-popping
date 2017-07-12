import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import LocationIcon from "./svg/Location";
import TimeIcon from "./svg/Time";
import CostIcon from "./svg/Cost";

const EventItem = ({ id, title, location, startTime, endTime, price }) => {
  return (
    <li className="event-item">
      <Link to={`/event/${id}`}>
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

EventItem.PropTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  startTime: PropTypes.string,
  endTime: PropTypes.string,
  price: PropTypes.string
};

export default EventItem;
