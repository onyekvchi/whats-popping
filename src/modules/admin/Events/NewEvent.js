import React, { Component } from "react";
import moment from "moment";
import Container from "../../shared/Container";
import Card from "../../shared/Card";
import styled from "styled-components";
import Input from "../../shared/Input";
import TextArea from "../../shared/TextArea";
import { withRouter } from "react-router-dom";
import { API } from "../../../utils";

class NewEvent extends Component {
  state = {
    loading: false,
    error: false,
    event: {
      title: "Kachi's event 2",
      location: "Hs 10, A1 Close, 311 Road, Gowon Estate, Egbeda, Lagos",
      description:
        "It's really just an excuse to waste money, nothing too serious tbh",
      date: "2017-09-29",
      startTime: "12pm",
      price: 0,
      image:
        "https://media.textadventures.co.uk/coverart/b69281d8-93b6-4c6a-a964-441dddfe8a9d.jpg",
      link: ""
    }
  };

  handleChange = e => {
    this.setState({
      event: {
        ...this.state.event,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true });
    API.postEvent(this.state.event)
      .then(({ data }) => {
        // this.props.history.push(`/vip/events/${ data.event._id }`);
        this.props.history.push('/vip/events');
      })
      .catch(error => {
        this.setState({ loading: false, error: true });
      });
  };

  render() {
    return (
      <Container>
        <Card>{this.renderForm(this.state)}</Card>
      </Container>
    );
  }

  renderForm = ({ event, loading }) => (
    <div>
      <Form onSubmit={this.handleSubmit}>
        <Input
          name="title"
          value={event.title}
          onChange={this.handleChange}
          placeholder="Title"
        />
        <Input
          name="location"
          value={event.location}
          onChange={this.handleChange}
          placeholder="Location"
        />
        <TextArea
          value={event.description}
          placeholder="Description"
          name="description"
          rows="6"
          onChange={this.handleChange}
        />
        <Input
          name="date"
          type="date"
          value={moment(event.date).format("YYYY-MM-DD")}
          onChange={this.handleChange}
          placeholder="Date (YYYYMMDD)"
        />
        <Input
          name="startTime"
          value={event.startTime}
          onChange={this.handleChange}
          placeholder="Start time (e.g. 8pm)"
        />
        <Input
          name="endTime"
          value={event.endTime}
          onChange={this.handleChange}
          placeholder="End time (e.g. 12pm)"
        />
        <Input
          name="price"
          value={event.price}
          onChange={this.handleChange}
          placeholder="Price (in naira) or Free"
        />
        <Input
          name="image"
          value={event.image}
          onChange={this.handleChange}
          placeholder="Link to event image"
        />
        <Input
          name="link"
          value={event.link}
          onChange={this.handleChange}
          placeholder="Link to event website"
        />
        <Button disabled={loading}>{loading ? "Loading..." : "Save"}</Button>
      </Form>
    </div>
  );
}

export default withRouter(NewEvent);

const Form = styled.form`
  width: 450px;
  margin: 50px auto;
`;

const Button = styled.button`
  appearance: none;
  padding: 15px 20px 12px;
  width: 100%;
  margin: 0 auto;
  display: block;
  border: none;
  border-radius: 3px;
  font-size: 1.4rem;
  margin-bottom: 8px;
  outline: none;
  transition: all 300ms;
  font-family: "SofiaWeb";
  text-align: center;
  background: #007acc;
  background: #121212;
  color: white;
  transition: all 300ms;
  &:disabled {
    opacity: 0.4;
  }
`;
