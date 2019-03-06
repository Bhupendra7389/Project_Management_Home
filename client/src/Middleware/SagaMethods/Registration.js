import axios from "axios";
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
export default function* userRegistration(action) {
  let User = yield axios.post("/Register/UserRegistration", action.developer);
  if (User !== Error) {
    yield showNotification({
      data: "User Registered Successfully",
      type: "success"
    });
    action.developer.history.push("/DeveloperLog");
  }
}
