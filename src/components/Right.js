import React from "react";

import { Route } from "react-router-dom";
import EventListPane from "./EventListPane";
import EventDetailPane from "./EventDetailPane";
import Side from "./Side";

const Right = props => {
  return (
    <Side float="right">
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
    </Side>
  );
};

export default Right;
