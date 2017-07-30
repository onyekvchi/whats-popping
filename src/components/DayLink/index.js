import React from "react";
import moment from "moment";
import HeaderLink from "./HeaderLink";

const DayLink = ({ active, day, onClick }) => {
  return (
    <HeaderLink active={active} onClick={onClick} key={day}>
      {moment(day, "YYYYMMDD").format("ddd")} / &nbsp;
      {moment(day, "YYYYMMDD").format("MMM DD")}
    </HeaderLink>
  );
};

export default DayLink;
