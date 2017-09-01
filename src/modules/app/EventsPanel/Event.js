import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "../../styles/Container";
import FadeIn from "../../styles/FadeIn";
import EventContent from "./EventContent";
import EventShimmer from "./EventShimmer";
import EventStyle from "./Event.style";
import BackIcon from "./icons/Back";
import API from "./../../../api";

class Event extends Component {
  state = {
    loading: true,
    loadEventFromState: false,
    event: this.props.event
  };

  componentDidMount = () => {
    if (this.props.event) {
      this.setState({
        loading: false
      });
    } else {
      API.getEvent(this.props.id).then(event =>
        this.setState({
          event: event.data,
          loadEventFromState: true,
          loading: false
        })
      );
    }
  };

  render() {
    return (
      <EventStyle>
        <Container size="sm" float="left">
          <FadeIn>
            <Link to="/">
              <BackIcon />
            </Link>
          </FadeIn>
          {this.state.loading ? (
            <EventShimmer />
          ) : (
            <EventContent event={this.state.event} />
          )}
        </Container>
      </EventStyle>
    );
  }
}

export default Event;
