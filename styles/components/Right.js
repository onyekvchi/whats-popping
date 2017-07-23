import React from "react";

const Right = () => {
  return (
    <div className="side side--right">
      <Route
        path="/"
        render={routerProps =>
          <div className="full-height">
            <DayPicker {...{ ...routerProps, ...props }} />
            <EventsList {...{ ...routerProps, ...props }} />
          </div>}
      />
    </div>
  );
};
