import axios from "axios";

const API = {
	BASE_URL: "https://whatspopping.glitch.me/",

	get: url => axios.get(`${API.BASE_URL}${url}`),

	getEvents: () => {
		return API.get("events");
	},

	getLatestEvents: () => {
		return API.get("events/latest");
	}
};

export default API;
