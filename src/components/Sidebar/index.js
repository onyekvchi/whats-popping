import React from "react";
import { Route } from "react-router-dom";
import Event from "../Event";
import SidebarStyle from "./SidebarStyle";

const Sidebar = props => {
  const isActive = props.location.pathname.split("/")[1] === "event";
  return (
    <SidebarStyle active={isActive}>
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
    </SidebarStyle>
  );
};

export default Sidebar;
