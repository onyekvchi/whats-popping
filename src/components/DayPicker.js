import React from "react";
import DayLink from "./DayLink";

const DayPicker = ({ activeDate, days, setActiveDate }) => {
  const dayLinks = days.map((day, index) => {
    return (
      <DayLink
        day={day}
        key={index}
        active={day === activeDate}
        onClick={setActiveDate.bind(null, day)}
      />
    );
  });

  return (
    <div className="header">
      <div className="container container--sm container--float-left">
        <div className="header__links">
          {dayLinks}
        </div>
      </div>
    </div>
  );
};

export default DayPicker;
