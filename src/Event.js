import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import PropTypes from "prop-types";

const Event = ({ match, events }) => {
  const event = events[match.params.id - 1];
  console.log(event);
  return (
    <div className="event">
      <div className="container container--sm">
        <Link to="/">Back</Link>
        <h1 className="event__title">
          {event.title}
        </h1>
        <div className="event__location">
          {event.location}
        </div>
        <div className="event__date">
          <Moment format="dddd, Do MMMM, YYYY">
            {event.date}
          </Moment>
        </div>
        <div className="event__time">
          {event.startTime}
          {event.endTime ? ` – ${event.endTime}` : ""}{" "}
        </div>
        <div className="event__time">
          {event.price}
        </div>
        <div className="hr" />
        {/* <div className="event__image" /> */}
        <div className="event__description">
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
