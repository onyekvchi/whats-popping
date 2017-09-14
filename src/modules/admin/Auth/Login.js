import React, { Component } from "react";
import Container from "./../../shared/Container";
import { Input, Button, LoginTitle, Error } from "./Login.style";
import Page from "../../shared/Page";
import { API, Auth } from "../../../utils";
import { withRouter, Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    form: {
      email: "",
      password: ""
    },
    loading: false,
    error: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true, error: false });

    API.login(this.state.form)
      .then(response => {
        Auth.authenticateAdmin();
        this.props.history.push("/vip/events");
      })
      .catch(response => this.setState({ error: true, loading: false }));
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return Auth.isAdminLoggedIn() ? (
      <Redirect to="/vip/events" />
    ) : (
      this.renderPage()
    );
  }

  renderPage = () => (
    <Page>
      <Container size="sm">
        <LoginTitle>Welcome back!</LoginTitle>
        <form onSubmit={this.handleSubmit}>
          <Error>{this.state.error && "Login Failed."}</Error>
          <Input
            name="email"
            autofocus={true}
            type="text"
            placeholder="Email Address"
            onChange={this.handleChange}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <Button disabled={this.state.loading}>
            {this.state.loading ? "Loading..." : "Login"}
          </Button>
        </form>
      </Container>
    </Page>
  );
}

export default withRouter(Login);
