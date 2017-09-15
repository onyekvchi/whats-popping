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
    // Do call to update POST via API here
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
        <Input name="title" placeholder="Title" />
        <Input name="location" placeholder="Location" />
        <TextArea placeholder="Description" name="description" rows="6" />
        <Input name="date" placeholder="Date (YYYYMMDD)" />
        <Input name="startTime" placeholder="Start time (e.g. 8pm)" />
        <Input name="endTime" placeholder="End time (e.g. 12pm)" />
        <Input name="price" placeholder="Price (in naira) or Free" />
        <Input name="image" placeholder="Link to event image" />
        <Input name="link" placeholder="Link to event website" />
        <Button disabled={this.state.loading}>Create</Button>
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
`;
