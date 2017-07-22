import React from "react";

const EventItemShimmer = () => {
  return (
    <div className="shimmer">
      <div className="shimmer__background">
        <div className="shimmer__mask shimmer__mask--title-right" />
        <div className="shimmer__mask shimmer__mask--title-bottom" />
        <div className="shimmer__mask shimmer__mask--location-right" />
        <div className="shimmer__mask shimmer__mask--location-bottom" />
        <div className="shimmer__mask shimmer__mask--time-right" />
        <div className="shimmer__mask shimmer__mask--price-right" />
      </div>
    </div>
  );
};

export default EventItemShimmer;
