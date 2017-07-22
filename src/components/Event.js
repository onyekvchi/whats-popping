import React from "react";
import { Link } from "react-router-dom";

import EventContent from "./EventContent";
import EventShimmer from "./EventShimmer";

const Event = ({ event }) => {
  return (
    <div className="event">
      <div className="container container--sm">
        <div className="animFadeIn anim-delay--1">
          <Link to="/">Back</Link>
        </div>
        {event ? <EventContent event={event} /> : <EventShimmer />}
      </div>
    </div>
  );
};

export default Event;
