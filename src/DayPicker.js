import React from "react";
import DayLink from "./DayLink";

const DayPicker = ({ activeDate, days, setActiveDate }) => {
  return (
    <div className="header">
      <div className="container container--sm">
        {days.map(day => {
          return (
            <DayLink
              {...day}
              key={day.date}
              active={day.date === activeDate}
              onClick={setActiveDate.bind(null, day.date)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DayPicker;
