import axios from "axios";
import { put } from "redux-saga/effects";
export default function* deleteAfterInvite(action) {
  yield axios.post("/Delete/DeleteAfterInvite", action.value);
  yield put({ type: "LISTDEVELOPER" });
}
