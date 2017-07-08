import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";

const DayLink = ({ active, name, date, day, onClick }) => {
  return (
    <a
      className={`header__link ${active && "header__link--active"}`}
      onClick={onClick}
      key={date}
    >
      <Moment format="ddd">
        {date}
      </Moment>
      <span className="header__date">
        <Moment format="MMM DD">
          {date}
        </Moment>
      </span>
    </a>
  );
};

DayLink.propTypes = {
  day: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
  date: PropTypes.string
};

export default DayLink;
