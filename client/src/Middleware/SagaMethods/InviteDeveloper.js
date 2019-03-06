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
export default function* inviteDeveloper(action) {
  let user = yield axios.post("/Invite/Developer", action.Ids).then(res => {
    return res.data;
  });
  if (user) {
    yield showNotification({
      data: "Developer Invited Successfully",
      type: "success"
    });
  }
}
