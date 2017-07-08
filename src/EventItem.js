import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const EventItem = ({ id, title, location, startTime, endTime, price }) => {
  return (
    <li className="event-item">
      <Link to={`/event/${id}`}>
        <h2 className="event-item__title">
          {title}
        </h2>
      </Link>
      <div className="event-item__location">
        {location}
      </div>
      <div className="event-item__time-price-wrap">
        <div className="event-item__time">
          {`${startTime} ${endTime ? " – " + endTime : ""}`}
        </div>
        <div className="event-item__price">
          {price}
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
