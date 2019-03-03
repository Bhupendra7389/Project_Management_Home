import axios from "axios";
import { put } from "redux-saga/effects";
import Noty from "noty";
import "../../../node_modules/noty/lib/noty.css";
import "../../../node_modules/noty/lib/themes/bootstrap-v4.css";
export default function* commentOnTask(action) {
  let comment = yield axios.put(
    "/Add/Comment/" + action.comment.Id,
    action.comment
  );
  if (comment) {
    yield showNotification({
      data: " Commented",
      type: "success"
    });
  }
  yield put({ type: "LISTTASK" });
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
