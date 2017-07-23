import React from "react";
import DayLink from "./DayLink";

const DayPicker = ({ activeDate, days, setActiveDate }) => {
  return (
    <div className="header">
      <div className="container container--sm container--float-left">
        {days.map((day, index) => {
          return (
            <DayLink
              day={day}
              key={index}
              active={day === activeDate}
              onClick={setActiveDate.bind(null, day)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DayPicker;
