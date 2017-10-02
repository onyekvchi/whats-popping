import React, { Component } from "react";
import Container from "../../shared/Container";
import Card from "../../shared/Card";
import styled from "styled-components";
import Input from "../../shared/Input";
import TextArea from "../../shared/TextArea";
import { withRouter } from "react-router-dom";
import { API } from "../../../utils";
import Blink from "../../shared/Blink";
import moment from "moment";

const textStyle = { margin: "90px 0", textAlign: "center" };

class SingleEvent extends Component {
  state = {
    loading: true,
    error: false,
    event: {}
  };

  componentDidMount = () => {
    API.getEvent(this.props.match.params.id)
      .then(response => this.setState({ event: response.data, loading: false }))
      .catch(error => this.setState({ loading: false, error: true }));
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
    API.updateEvent(this.state.event)
      .then(({ data }) => {
        this.setState({
          event: data.event,
          loading: false
        });
      })
      .catch(error => {
        this.setState({ loading: false, error: true });
      });
  };

  render() {
    const { event, loading, error } = this.state;
    return (
      <Container>
        <Card>
          {loading ? (
            <div style={textStyle}>
              <Blink>Loading...</Blink>
            </div>
          ) : error ? (
            <div style={textStyle}>There was an error loading the event :(</div>
          ) : (
            this.renderForm(event)
          )}
        </Card>
      </Container>
    );
  }

  renderForm = event => (
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
        <Button>Update</Button>
      </Form>
      {/* <div
        style={{
          textAlign: "center",
          marginBottom: "30px",
          fontSize: "14px"
        }}
      >
        <a href="#" style={{ color: "#007ACC" }}>
          Preview this event
        </a>
      </div> */}
    </div>
  );
}

export default withRouter(SingleEvent);

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
`;
