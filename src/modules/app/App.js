import React, { Component } from "react";

import EventsPanel from "./EventsPanel/EventsPanel";
import InfoPanel from "./InfoPanel/InfoPanel";

class App extends Component {
  render() {
    return (
      <div className="app">
        <InfoPanel />
        <EventsPanel />
      </div>
    );
  }
}

export default App;
