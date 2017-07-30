import React from "react";
import { Link } from "react-router-dom";
import EventContent from "../EventContent";
import EventShimmer from "../EventShimmer";
import BackIcon from "../svg/Back";
import Container from "../Container";
import FadeIn from "../FadeIn";
import Event from "./Event";

const EventDetailPane = props => {
  const path = props.location.pathname.split("/")[1];
  const id = props.location.pathname.split("/")[2];
  const isActive = path === "event";
  const event = props.events.find(event => event._id === id);
  return (
    <Event active={isActive}>
      <Container size="sm" float="left">
        <FadeIn>
          <Link to="/">
            <BackIcon />
          </Link>
        </FadeIn>
        {event
          ? <EventContent event={event} />
          : props.events.length === 0 && <EventShimmer />}
      </Container>
    </Event>
  );
};

export default EventDetailPane;
