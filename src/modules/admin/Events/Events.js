import React, { Component } from "react";
import Container from "../../shared/Container";
import { Route, Switch } from 'react-router-dom';
import Header, { HeaderLink } from '../../shared/Header';
import EventsList from './EventsList';
import SingleEvent from './SingleEvent';
import Flex from '../../shared/Flex';

class Events extends Component {

  render() {
    return (
      <div>
        <Header>
          <Container>
            <Flex>
              <h1
                style={{
                  color: "white",
                  fontFamily: "TiemposWeb",
                  fontSize: "18px"
                }}
              >
                VIP Area
              </h1>
              <HeaderLink to="/">Logout</HeaderLink>
            </Flex>
          </Container>
        </Header>
        <Switch>
          <Route path="/vip/events/:id" exact component={SingleEvent}></Route>
          <Route path="/vip/events" component={EventsList}></Route>
        </Switch>
      </div>
    );
  }
}

export default Events;
