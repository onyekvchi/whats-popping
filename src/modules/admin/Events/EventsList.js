import React, { Component } from "react";
import styled from "styled-components";
import Container from "../../shared/Container";
import Card from "../../shared/Card";
import Table, { Th, Tr, Td } from "../../shared/Table";
import { withRouter } from "react-router-dom";
import { API } from "../../../utils";
import moment from "moment";
import Blink from "../../shared/Blink";

const textStyle = { margin: "90px 0", textAlign: "center" };

class EventsList extends Component {
  state = {
    events: [],
    loading: true,
    error: false
  };

  componentDidMount = () => {
    API.getEvents()
      .then(response =>
        this.setState({ events: response.data.events, loading: false })
      )
      .catch(error => this.setState({ loading: false, error: true }));
  };

  rowClick = id => {
    this.props.history.push(`/vip/events/${id}`);
  };

  addEvent = () => {
    this.props.history.push("/vip/events/new");
  };

  render() {
    return (
      <Container>
        <Button onClick={this.addEvent}>Add Event</Button>
        <Card>
          {this.state.loading ? (
            <div style={textStyle}>
              <Blink>Loading...</Blink>
            </div>
          ) : this.state.error ? (
            <div style={textStyle}>
              There was an error loading the events :(
            </div>
          ) : (
            this.renderTable()
          )}
        </Card>
      </Container>
    );
  }

  renderTable = () => (
    <Table>
      <thead>
        <Tr>
          <Th>Title</Th>
          <Th>Price</Th>
          <Th>Date</Th>
          <Th>Time</Th>
        </Tr>
      </thead>
      <tbody>
        {this.state.events.map(event => (
          <Tr key={event._id} onClick={() => this.rowClick(event._id)}>
            <Td>{event.title}</Td>
            <Td>{event.price}</Td>
            <Td>
              {moment(event.date, "YYYYMMDD").format("dddd / Do MMMM, YYYY")}
            </Td>
            <Td>
              {event.startTime} {event.endTime && "– " + event.endTime}
            </Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
}

export default withRouter(EventsList);

const Button = styled.button`
  padding: 12px 30px;
  border-radius: 4px;
  background-color: #a0713f;
  background-color: black;
  color: white;
  border: none;
  font-size: 1.4rem;
  margin-top: 30px;
  font-family: Futura;
  cursor: pointer;
`;
