import React, { Component } from "react";
import { Image as Img } from "../app/EventsPanel/EventContent.style";

export default class AsyncImage extends Component {
  state = {
    loaded: false,
    error: false
  };

  componentDidMount = () => {
    const image = new Image();
    image.onload = function() {
      this.setState({
        loaded: true
      });
    };

    image.onerror = function() {
      this.setState({
        error: true
      });
    };

    image.source = this.props.src;
  };

  render() {
    return <div>{this.state.loaded && <Img src={this.props.src} />}</div>;
  }
}
