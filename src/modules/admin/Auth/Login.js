import React, { Component } from "react";
import styled from "styled-components";
import Container from "./../../styles/Container";

export default class Login extends Component {
  render() {
    return (
      <Page>
        <Container size="sm">
          <LoginTitle>Welcome back!</LoginTitle>
          <form action="">
            <Input name="email" autofocus={true} type="text" placeholder="Email Address" />
            <Input name="password" type="password" placeholder="Password" />
            <Button>Login</Button>
          </form>
        </Container>
      </Page>
    );
  }
}

const Page = styled.div`
  height: 100%;
  width: 100%;
  background: whitesmoke;
  position: relative;
  padding-top: 120px;
`;

const LoginTitle = styled.h1`
  text-align: center;
  font-size: 2.4rem;
  font-family: "TiemposWeb";
  margin-bottom: 30px;
`;

const Input = styled.input`
  appearance: none;
  padding: 15px 20px 12px;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  display: block;
  border: 1px solid rgba(0,0,0,0.15);
  border-radius: 3px;
  font-size: 1.4rem;
  margin-bottom: 8px;
  outline: none;
  transition: all 300ms;
  font-family: "SofiaWeb";
  &:focus {
    border-color: rgba(0,0,0,0.7);
  }
`;

const Button = styled.button`
  appearance: none;
  padding: 15px 20px 12px;
  width: 100%;
  max-width: 300px;
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
  background: #007ACC;
  background: #121212;
  color: white;
`;
