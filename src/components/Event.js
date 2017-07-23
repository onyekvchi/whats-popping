import React from "react";
import { Link } from "react-router-dom";

import EventContent from "./EventContent";
import EventShimmer from "./EventShimmer";

const Event = ({ event, isActive }) => {
  return (
    <div className={`event ${isActive && "event--active"}`}>
      <div className="container container--sm container--float-left">
        <div className="animFadeIn anim-delay--1">
          <Link to="/">Back</Link>
        </div>
        {event ? <EventContent event={event} /> : <EventShimmer />}
      </div>
    </div>
  );
};

export default Event;
