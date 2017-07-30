import React from "react";
import { Link } from "react-router-dom";

import TimeIcon from "../svg/Time";
import CostIcon from "../svg/Cost";

import {
  EventItemStyle,
  EventItemTitle,
  EventItemLocation,
  EventItemDetail,
  EventItemIcon,
  EventItemPriceWrap
} from "./EventItemStyle";

const EventItem = ({ _id, title, location, startTime, endTime, price }) => {
  return (
    <EventItemStyle>
      <Link to={`/event/${_id}`}>
        <EventItemTitle>
          {title}
        </EventItemTitle>
      </Link>
      <EventItemLocation>
        {location}
      </EventItemLocation>
      <EventItemPriceWrap>
        <EventItemDetail>
          <EventItemIcon>
            <TimeIcon />
          </EventItemIcon>
          <div>
            {`${startTime} ${endTime ? " – " + endTime : ""}`}
          </div>
        </EventItemDetail>
        <EventItemDetail>
          <EventItemIcon>
            <CostIcon />
          </EventItemIcon>
          <div>
            {price}
          </div>
        </EventItemDetail>
      </EventItemPriceWrap>
    </EventItemStyle>
  );
};

export default EventItem;
