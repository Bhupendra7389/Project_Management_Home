import axios from "axios";
import { put } from "redux-saga/effects";
export default function* commentOnTask(action) {
  yield axios.put("/Add/Comment/" + action.comment.Id, action.comment);
  yield put({ type: "LISTTASK" });
}
