function days(state = [], action) {
	switch (action.type) {
		case "EVENTS_FETCH_SUCCEEDED":
			return action.payload.days;
		default:
			return state;
	}
}

export default days;
