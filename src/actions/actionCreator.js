export function setActiveDate(date) {
  return {
    type: "SET_ACTIVE_DATE",
    payload: date
  };
}

export function loadEvents() {
  return {
    type: "EVENTS_FETCH_REQUESTED"
  };
}
