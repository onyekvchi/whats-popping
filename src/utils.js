import axios from "axios";

export const API = {
  BASE_URL: "https://whatspopping.glitch.me/",
  // BASE_URL: "http://localhost:8000",

  get(url) {
    return axios.get(`${API.BASE_URL}${url}`);
  },

  post(url, payload) {
    return axios.post(`${API.BASE_URL}${url}`, payload);
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
