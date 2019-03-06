import axios from "axios";
import { put } from "redux-saga/effects";
import Noty from "noty";
import "../../../node_modules/noty/lib/noty.css";
import "../../../node_modules/noty/lib/themes/bootstrap-v4.css";
function* showNotification(user) {
  yield new Noty({
    theme: "bootstrap-v4",
    type: user.type,
    layout: "topRight",
    text: user.data,
    timeout: 1000
  }).show();
}
export default function* commentOnTask(action) {
  let task = yield axios.put(
    "/Add/Comment/" + action.comment.Id,
    action.comment
  );
  if (task) {
    yield showNotification({
      data: "User Commented on Task",
      type: "success"
    });
  }

  yield put({ type: "LISTTASK" });
}
