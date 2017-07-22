import React from "react";
import { Route } from "react-router-dom";
import Event from "./Event";

const Sidebar = props => {
  const isActive = props.location.pathname.split("/")[1] === "event";
  return (
    <div className={`sidebar ${isActive && "sidebar--opened"}`}>
      <Route
        exact
        location={props.location}
        path="/event/:id"
        render={routerProps =>
          <Event
            event={props.events.find(
              event => event._id === routerProps.match.params.id
            )}
          />}
      />
    </div>
  );
};

export default Sidebar;
