import axios from "axios";
import Noty from "noty";
import "../../../node_modules/noty/lib/noty.css";
import "../../../node_modules/noty/lib/themes/bootstrap-v4.css";
export default function* addProject(action) {
  let user = yield axios.post("/Add/Project", action.project).then(res => {
    return res.data;
  });
  if (user) {
    yield showNotification({
      data: " Project Added Succesfully",
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
    timeout: 3000
  }).show();
}
