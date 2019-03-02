import axios from "axios";
import { put } from "redux-saga/effects";
export default function* deleteAfterInvite(action) {
  console.log(action.value);
  yield axios.post("/Delete/DeleteAfterInvite", action.value);
  yield put({ type: "LISTDEVELOPER" });
}
