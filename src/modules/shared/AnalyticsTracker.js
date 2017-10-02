import { Component } from "react";
import GoogleAnalytics from "react-ga";

export default class AnalyticsTracker extends Component {
  constructor() {
    super();
    GoogleAnalytics.initialize("UA-107331637-1");
  }

  trackPage = () => {
    const page = window.location.pathname + window.location.search;
    if (page.split("/")[1] !== "vip") {
      GoogleAnalytics.set({ page });
      GoogleAnalytics.pageview(page);
    }
  };

  componentDidMount = () => {
    this.trackPage();
  };

  componentWillUpdate = newProps => {
    this.trackPage();
  };

  render() {
    return null;
  }
}
