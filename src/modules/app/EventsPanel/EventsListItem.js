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
import { formatPrice } from '../../../utils';

const EventsListItem = ({
  _id,
  slug,
  title,
  location,
  startTime,
  endTime,
  price
}) => {
  return (
    <EventsListItemStyle>
      <Link to={`/event/${slug}`}>
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
          <div>{formatPrice(price)}</div>
        </Detail>
      </PriceWrap>
    </EventsListItemStyle>
  );
};

EventsListItem.propTypes = {
  _id: PropTypes.string,
  slug: PropTypes.string,
  title: PropTypes.string,
  location: PropTypes.string,
  startTime: PropTypes.string,
  endTime: PropTypes.string,
  price: PropTypes.number
};

export default EventsListItem;
