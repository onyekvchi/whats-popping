import React from "react";
import { Link } from "react-router-dom";
import EventContent from "./EventContent";
import EventShimmer from "./EventShimmer";
import BackIcon from "./svg/Back";

const EventDetailPane = props => {
  const path = props.location.pathname.split("/")[1];
  const id = props.location.pathname.split("/")[2];
  const isActive = path === "event";
  const event = props.events.find(event => event._id === id);
  return (
    <div className={`event ${isActive && "event--active"}`}>
      <div className="container container--sm container--float-left">
        <div className="animFadeIn">
          <Link to="/">
            <BackIcon />
          </Link>
        </div>
        {event
          ? <EventContent event={event} />
          : props.events.length === 0 && <EventShimmer />}
      </div>
    </div>
  );
};

export default EventDetailPane;
