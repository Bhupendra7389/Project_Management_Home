import { put } from "redux-saga/effects";
import axios from "axios";
export default function* invitedByProject(action) {
  let value = yield axios.get("/Get/InvitedByProject/" + action.id);
  yield put({ type: "INVITEDDEVELOPER", payload: value.data });
}
