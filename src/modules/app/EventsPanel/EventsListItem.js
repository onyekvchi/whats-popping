import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import TimeIcon from "./icons/Time";
import CostIcon from "./icons/Cost";

import {
  EventsListItemStyle,
  Title,
  Location,
  Detail,
  Icon,
  PriceWrap
} from "./EventsListItem.style";

const EventsListItem = ({
  _id,
  title,
  location,
  startTime,
  endTime,
  price
}) => {
  return (
    <EventsListItemStyle>
      <Link to={`/event/${_id}`}>
        <Title>{title}</Title>
      </Link>
      <Location>{location}</Location>
      <PriceWrap>
        <Detail>
          <Icon>
            <TimeIcon />
          </Icon>
          <div>{`${startTime} ${endTime ? " – " + endTime : ""}`}</div>
        </Detail>
        <Detail>
          <Icon>
            <CostIcon />
          </Icon>
          <div>{price}</div>
        </Detail>
      </PriceWrap>
    </EventsListItemStyle>
  );
};

EventsListItem.propTypes = {
  _id: PropTypes.string,
  title: PropTypes.string,
  location: PropTypes.string,
  startTime: PropTypes.string,
  endTime: PropTypes.string,
  price: PropTypes.string
};

export default EventsListItem;
