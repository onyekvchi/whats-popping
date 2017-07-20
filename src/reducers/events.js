function events(state = [], action) {
	switch (action.type) {
		case "EVENTS_FETCH_SUCCEEDED":
			return action.payload.events;
		default:
			return state;
	}
}

export default events;
