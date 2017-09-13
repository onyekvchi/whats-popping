import { API } from "../utils";
import { call, put, takeLatest } from "redux-saga/effects";

function* fetchEvents(action) {
  try {
    const response = yield call(API.getEvents);
    yield put({ type: "EVENTS_FETCH_SUCCEEDED", payload: response.data });
  } catch (e) {
    yield put({ type: "EVENTS_FETCH_FAILED", message: e.message });
  }
}

/*
  Starts fetchEvents on each dispatched `EVENTS_FETCH_REQUESTED` action.
  Doesn't allows concurrent fetches of events.
*/
export default function* eventsSaga() {
  yield takeLatest("EVENTS_FETCH_REQUESTED", fetchEvents);
}
