export const FILTER_EVENTS = "FILTER_EVENTS";
export const SET_ACTIVE_DATE = "SET_ACTIVE_DATE";

export function filterEvents(date) {
  return {
    type: FILTER_EVENTS,
    date
  };
}

export function setActiveDate(date) {
  return {
    type: SET_ACTIVE_DATE,
    date
  };
}
