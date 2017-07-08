export const SET_ACTIVE_DATE = "SET_ACTIVE_DATE";

export function setActiveDate(date) {
  return {
    type: SET_ACTIVE_DATE,
    date
  };
}
