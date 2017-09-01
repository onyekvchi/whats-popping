import axios from "axios";

const API = {
  BASE_URL: "https://whatspopping.glitch.me/",

  get(url) {
    return axios.get(`${API.BASE_URL}${url}`);
  },

  getEvents() {
    return API.get("events");
  },

  getEvent(eventId) {
    return API.get("event/" + eventId);
  },

  getLatestEvents() {
    return API.get("events/latest");
  }
};

export default API;
