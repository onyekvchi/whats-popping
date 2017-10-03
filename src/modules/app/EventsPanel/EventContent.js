import React from "react";
import moment from "moment";
import FadeIn from "../../shared/FadeIn";
import CostIcon from "./icons/Cost";
import LocationIcon from "./icons/Location";
import DateIcon from "./icons/Date";
import TimeIcon from "./icons/Time";
import {
  Title,
  SubTitle,
  Detail,
  Icon,
  Divider,
  Description,
  Image
} from "./EventContent.style";
import { formatPrice } from "../../../utils";

const EventContent = ({ event }) => {
  return (
    <FadeIn>
      <Title>{event.title}</Title>
      <Detail>
        <Icon>
          <LocationIcon />
        </Icon>
        <div>{event.location}</div>
      </Detail>
      <Detail>
        <Icon>
          <DateIcon />
        </Icon>
        <div>
          {moment(event.date, "YYYYMMDD").format("dddd / Do MMMM, YYYY")}
        </div>
      </Detail>
      <Detail>
        <Icon>
          <TimeIcon />
        </Icon>
        <div>
          {event.startTime}
          {event.endTime ? ` – ${event.endTime}` : ""}
        </div>
      </Detail>
      <Detail>
        <Icon>
          <CostIcon />
        </Icon>
        <div>{formatPrice(event.price)}</div>
      </Detail>
      <Divider />
      <SubTitle>Our two cents</SubTitle>
      <Description>{event.description}</Description>
      {event.image && <Image src={event.image} alt={event.title + " image"} />}
    </FadeIn>
  );
};

export default EventContent;
