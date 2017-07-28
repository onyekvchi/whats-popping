import React from "react";

import { Route } from "react-router-dom";
import EventListPane from "./EventListPane";
import EventDetailPane from "./EventDetailPane";

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
