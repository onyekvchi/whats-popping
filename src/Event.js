import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import PropTypes from "prop-types";

import BackIcon from "./svg/Back";
import CostIcon from "./svg/Cost";
import LocationIcon from "./svg/Location";
import DateIcon from "./svg/Date";
import TimeIcon from "./svg/Time";

const Event = ({ match, events, eventIndex }) => {
  // const event = events[match.params.id - 1];
  const event = events[eventIndex];
  return (
    <div className="event">
      <div className="container container--sm">
        <Link to="/">
          <div className="animFadeIn anim-delay--1">Back</div>
        </Link>
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
            <Moment format="dddd / Do MMMM, YYYY">
              {event.date}
            </Moment>
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
        {/* <div className="event__image" /> */}
        <div className="event__description animFadeIn anim-delay--1">
          <h2 className="event__subtitle">Our two cents</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
            veritatis laboriosam sed ullam consequatur non reiciendis
            repellendus, maxime voluptatum, aut incidunt consequuntur
            accusantium hic. Blanditiis illo magnam libero dolorem itaque.
          </p>
        </div>
        {
          event.links
          // <ul className="event__links">
          //   event.links.map((link) => <li className="event__link"><Link to="link.href">{link.text}</Link></li>)
          // </ul>
        }
      </div>
    </div>
  );
};

Event.propTypes = {
  day: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  links: PropTypes.array,
  startTime: PropTypes.string,
  endTime: PropTypes.string
};

export default Event;
