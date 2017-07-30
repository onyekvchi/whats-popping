import React from "react";
import DayLink from "../DayLink";
import Container from "../Container";
import Header from "./Header";
import HeaderLinks from "./HeaderLinks";

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
    <Header>
      <Container float="left" size="sm">
        <HeaderLinks>
          {dayLinks}
        </HeaderLinks>
      </Container>
    </Header>
  );
};

export default DayPicker;
