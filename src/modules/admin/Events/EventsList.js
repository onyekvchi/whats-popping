import React, { Component } from "react";
import styled from "styled-components";
import Container from "../../shared/Container";
import Card from "../../shared/Card";
import Table, { Th, Tr, Td } from "../../shared/Table";
import { withRouter } from "react-router-dom";

class EventsList extends Component {
  rowClick = () => {
    this.props.history.push("/vip/events/1");
  };

  render() {
    return (
        <Container>
          <Button>Add Event</Button>
          <Card>
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
                <Tr onClick={this.rowClick}>
                  <Td>
                    The title of my event goes here. Even if it's really long
                  </Td>
                  <Td>Free</Td>
                  <Td>3 Jan, 2017</Td>
                  <Td>10am</Td>
                </Tr>
                <Tr onClick={this.rowClick}>
                  <Td>
                    The title of my event goes here. Even if it's really long
                  </Td>
                  <Td>Free</Td>
                  <Td>3 Jan, 2017</Td>
                  <Td>10am</Td>
                </Tr>
                <Tr onClick={this.rowClick}>
                  <Td>
                    The title of my event goes here. Even if it's really long
                  </Td>
                  <Td>Free</Td>
                  <Td>3 Jan, 2017</Td>
                  <Td>10am</Td>
                </Tr>
                <Tr onClick={this.rowClick}>
                  <Td>
                    The title of my event goes here. Even if it's really long
                  </Td>
                  <Td>Free</Td>
                  <Td>3 Jan, 2017</Td>
                  <Td>10am</Td>
                </Tr>
                <Tr onClick={this.rowClick}>
                  <Td>
                    The title of my event goes here. Even if it's really long
                  </Td>
                  <Td>Free</Td>
                  <Td>3 Jan, 2017</Td>
                  <Td>10am</Td>
                </Tr>
                <Tr onClick={this.rowClick}>
                  <Td>
                    The title of my event goes here. Even if it's really long
                  </Td>
                  <Td>Free</Td>
                  <Td>3 Jan, 2017</Td>
                  <Td>10am</Td>
                </Tr>
                <Tr onClick={this.rowClick}>
                  <Td>
                    The title of my event goes here. Even if it's really long
                  </Td>
                  <Td>Free</Td>
                  <Td>3 Jan, 2017</Td>
                  <Td>10am</Td>
                </Tr>
                <Tr onClick={this.rowClick}>
                  <Td>
                    The title of my event goes here. Even if it's really long
                  </Td>
                  <Td>Free</Td>
                  <Td>3 Jan, 2017</Td>
                  <Td>10am</Td>
                </Tr>
                <Tr onClick={this.rowClick}>
                  <Td>
                    The title of my event goes here. Even if it's really long
                  </Td>
                  <Td>Free</Td>
                  <Td>3 Jan, 2017</Td>
                  <Td>10am</Td>
                </Tr>
                <Tr onClick={this.rowClick}>
                  <Td>
                    The title of my event goes here. Even if it's really long
                  </Td>
                  <Td>Free</Td>
                  <Td>3 Jan, 2017</Td>
                  <Td>10am</Td>
                </Tr>
              </tbody>
            </Table>
          </Card>
        </Container>
    );
  }
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
