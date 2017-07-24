import React from "react";

import { Link, Route } from "react-router-dom";
import DayPicker from "./DayPicker";
import EventListPane from "./EventListPane";
import EventDetailPane from "./EventDetailPane";
import BackIcon from "./svg/Back";

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

export default Right;
