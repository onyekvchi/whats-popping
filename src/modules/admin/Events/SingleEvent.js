import React, { Component } from "react";
import Container from "../../shared/Container";
import Card from "../../shared/Card";
import styled from "styled-components";
import Input from "../../shared/Input";
import TextArea from "../../shared/TextArea";

export default class SingleEvent extends Component {
  render() {
    return (
      <Container>
        <Card>
          <Form>
            <Input placeholder="Title" />
            <Input placeholder="Location" />
            <TextArea placeholder="Description" name="description" rows="4" />
            <Input placeholder="Date (YYYYMMDD)" />
            <Input placeholder="Start time (e.g. 8pm)" />
            <Input placeholder="End time (e.g. 12pm)" />
            <Input placeholder="Price (in naira) or Free" />
            <Input placeholder="Link to event image" />
            <Input placeholder="Link to event website" />
            <Button>Submit</Button>
          </Form>
          <div style={{ textAlign: "center", marginBottom: "30px", fontSize: "14px" }}>
            <a href="#" style={{color: "#007ACC"}}>
              Preview this event
            </a>
          </div>
        </Card>
      </Container>
    );
  }
}

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
