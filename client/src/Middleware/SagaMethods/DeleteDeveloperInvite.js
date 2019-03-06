import axios from "axios";
import { put } from "redux-saga/effects";

export default function* deleteDeveloperInvite(action) {
  try {
    yield axios.post("/Delete/DeleteDeveloperInvite", action.user);
    yield put({ type: "LISTDEVELOPER" });
  } catch (error) {
    console.log("SagaMethod Error");
  }
}
