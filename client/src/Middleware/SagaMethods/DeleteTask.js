import axios from "axios";
import Noty from "noty";
import "../../../node_modules/noty/lib/noty.css";
import "../../../node_modules/noty/lib/themes/bootstrap-v4.css";
export default function* deleteTask(action) {
  let user = yield axios.delete("/Delete/DeleteTask/" + action.id);
  if (user) {
    yield showNotification({
      data: "Task Deleted Successfully",
      type: "success"
    });
  }
}

function* showNotification(user) {
  yield new Noty({
    theme: "bootstrap-v4",
    type: user.type,
    layout: "topRight",
    text: user.data,
    timeout: 1000
  }).show();
}
