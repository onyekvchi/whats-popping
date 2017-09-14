import React, { Component } from "react";
import Container from "../../shared/Container";
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import Header from "../../shared/Header";
import EventsList from "./EventsList";
import SingleEvent from "./SingleEvent";
import Flex from "../../shared/Flex";
import { Auth } from "../../../utils";
import styled from "styled-components";

class Events extends Component {
  logout = () => {
    Auth.deauthenticateAdmin();
    this.props.history.push("/vip");
  };

  render() {
    return (
      <div>
        <Header>
          <Container>
            <Flex>
              <Link to="/vip/events">
                <h1
                  style={{
                    color: "white",
                    fontFamily: "TiemposWeb",
                    fontSize: "18px"
                  }}
                >
                  VIP Area
                </h1>
              </Link>
              <Button onClick={this.logout}>Logout</Button>
            </Flex>
          </Container>
        </Header>
        <Switch>
          <Route path="/vip/events/:id" exact component={SingleEvent} />
          <Route path="/vip/events" component={EventsList} />
        </Switch>
      </div>
    );
  }
}

const Button = styled.button`
  background-color: #a0713f;
  background-color: black;
  color: #aaa;
  border: none;
  font-size: 1.4rem;
  font-family: Futura;
  cursor: pointer;
  transition: color 300ms;
  &:hover {
    color: white;
  }
`;

export default withRouter(Events);
