import React from "react";

import { Link, Route, matchPath } from "react-router-dom";
import DayPicker from "./DayPicker";
import EventsList from "./EventsList";
import EventContent from "./EventContent";
import EventShimmer from "./EventShimmer";

const Right = props => {
  return (
    <div className="side side--right">
      <Route
        path="/"
        render={routeProps =>
          <EventListPane {...{ ...props, ...routeProps }} />}
      />
      <Route
        path="/"
        render={routeProps =>
          <EventDetailPane {...{ ...props, ...routeProps }} />}
      />
    </div>
  );
};

const EventListPane = props => {
  const isActive = props.location.pathname.split("/")[1] !== "event";
  return (
    <div className={`event-list ${isActive && "event-list--active"}`}>
      <DayPicker {...props} />
      <EventsList {...props} />
    </div>
  );
};

const EventDetailPane = props => {
  console.log(props);
  const [waste, path, id] = props.location.pathname.split("/");
  const isActive = path === "event";
  const event = props.events.find(event => event._id === id);
  return (
    <div className={`event ${isActive && "event--active"}`}>
      <div className="container container--sm container--float-left">
        <div className="animFadeIn anim-delay--4">
          <Link to="/">Back</Link>
        </div>
        {event ? <EventContent event={event} /> : <EventShimmer />}
      </div>
    </div>
  );
};

export default Right;
