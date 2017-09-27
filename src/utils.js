import axios from "axios";

export const API = {
  // BASE_URL: "https://whatspopping.glitch.me/",
  BASE_URL: "http://localhost:3001/",

  get(url) {
    return axios.get(`${API.BASE_URL}${url}`);
  },

  post(url, payload) {
    return axios.post(`${API.BASE_URL}${url}`, payload);
  },

  put(url, payload) {
    return axios.put(`${API.BASE_URL}${url}`, payload);
  },

  getEvents() {
    return API.get("events");
  },

  getEvent(eventId) {
    return API.get("event/" + eventId);
  },

  getLatestEvents() {
    return API.get("events/latest");
  },

  postEvent(event) {
    return API.post('events', event);
  },

  updateEvent(event) {
      return API.put('event/' + event._id,  event);
  },

  login(payload) {
    return API.post("auth", payload);
  }
};

export const Auth = {
  authenticateAdmin() {
    sessionStorage.setItem("adminLoggedIn", true);
  },

  deauthenticateAdmin() {
    sessionStorage.removeItem("adminLoggedIn");
  },

  isAdminLoggedIn() {
    return sessionStorage.getItem("adminLoggedIn");
  }
};
