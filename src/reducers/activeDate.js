function activeDate(state = '', action) {
	switch (action.type) {
		case "SET_ACTIVE_DATE":
			return action.payload;
		case "EVENTS_FETCH_SUCCEEDED":
			return action.payload.days[0];
		default:
			return state;
	}
}

export default activeDate;
