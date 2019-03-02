import axios from "axios";
import { put } from "redux-saga/effects";
export default function* deleteTask(action) {
  yield axios.delete("/Delete/DeleteTask/" + action.id);
  yield put({ type: "LISTTASK" });
  yield put({ type: "LISTPROJECT" });
}
