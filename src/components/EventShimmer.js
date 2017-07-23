import React from "react";

const EventShimmer = ({ event }) => {
  return (
    <div className="event-shimmer">
      <div className="event-shimmer__background">
        <div className="event-shimmer__mask event-shimmer__mask--title-right" />
        <div className="event-shimmer__mask event-shimmer__mask--title-bottom" />
        <div className="event-shimmer__mask event-shimmer__mask--location-right" />
        <div className="event-shimmer__mask event-shimmer__mask--location-bottom" />
        <div className="event-shimmer__mask event-shimmer__mask--date-right" />
        <div className="event-shimmer__mask event-shimmer__mask--date-bottom" />
        <div className="event-shimmer__mask event-shimmer__mask--time-right" />
        <div className="event-shimmer__mask event-shimmer__mask--time-bottom" />
        <div className="event-shimmer__mask event-shimmer__mask--price-right" />
        <div className="event-shimmer__mask event-shimmer__mask--price-bottom" />
      </div>
    </div>
  );
};

export default EventShimmer;
