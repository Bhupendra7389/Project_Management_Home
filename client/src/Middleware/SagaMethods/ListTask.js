import axios from "axios";
import { put } from "redux-saga/effects";

export default function* listTask(action) {
  if (
    localStorage.getItem("Project_Id") !== "undefined" &&
    localStorage.getItem("Project_Id")
  ) {
    let List = yield axios.get(
      "/Get/TaskList/" + localStorage.getItem("Project_Id")
    );
    yield put({ type: "GETLISTTASK", payload: List.data });
  } else {
    action.history.push("/ProjectList");
  }
}
