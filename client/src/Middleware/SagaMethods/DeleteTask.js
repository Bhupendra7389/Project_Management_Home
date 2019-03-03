import axios from "axios";
import { put } from "redux-saga/effects";
import Noty from "noty";
import "../../../node_modules/noty/lib/noty.css";
import "../../../node_modules/noty/lib/themes/bootstrap-v4.css";
export default function* deleteTask(action) {
  let user = yield axios.delete("/Delete/DeleteTask/" + action.id);
  yield put({ type: "LISTTASK" });
  if (user) {
    yield showNotification({
      data: " Task Deleted",
      type: "error"
    });
  }
}
function* showNotification(user) {
  yield new Noty({
    theme: "bootstrap-v4",
    type: user.type,
    layout: "topRight",
    text: user.data,
    timeout: 3000
  }).show();
}
