import React, { Component } from "react";
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
    event: {}
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
      .then(response => {
        this.props.history.push(`/vip/events/${response.data.id}`);
      })
      .catch(error => {
        this.setState({ loading: false, error: true });
      });
  };

  render() {
    const event = this.state.event;
    return (
      <Container>
        <Card>{this.renderForm(this.state.event)}</Card>
      </Container>
    );
  }

  renderForm = event => (
    <div>
      <Form onSubmit={this.handleSubmit}>
        <Input
          name="title"
          placeholder="Title"
          onChange={this.handleChange}
          required={true}
        />
        <Input
          name="location"
          placeholder="Location"
          onChange={this.handleChange}
          required={true}
        />
        <TextArea
          placeholder="Description"
          name="description"
          rows="6"
          onChange={this.handleChange}
        />
        <Input
          name="date"
          placeholder="Date (YYYYMMDD)"
          onChange={this.handleChange}
        />
        <Input
          name="startTime"
          placeholder="Start time (e.g. 8pm)"
          onChange={this.handleChange}
        />
        <Input
          name="endTime"
          placeholder="End time (e.g. 12pm)"
          onChange={this.handleChange}
        />
        <Input
          name="price"
          placeholder="Price (in naira) or Free"
          onChange={this.handleChange}
        />
        <Input
          name="image"
          placeholder="Link to event image"
          onChange={this.handleChange}
        />
        <Input
          name="link"
          placeholder="Link to event website"
          onChange={this.handleChange}
        />
        <Button disabled={this.state.loading}>
          {this.state.loading ? "Loading..." : "Create"}
        </Button>
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
