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

export default function* userLogin(action) {
  let Data = yield axios.post("/Login/UserLogin", action.developer);
  if (Data.data.token !== "undefined" && Data.data.token) {
    localStorage.setItem("Token", Data.data.token);
    localStorage.setItem("Email", Data.data.user.Email);
    localStorage.setItem("Name", Data.data.user.Name);
    localStorage.setItem("Position", Data.data.user.Position);
    localStorage.setItem("_id", Data.data.user._id);
  }
  if (
    localStorage.getItem("Token") &&
    localStorage.getItem("Position") === "Developer"
  ) {
    yield showNotification({
      data: "Developer Logged-In Successfully",
      type: "success"
    });
    action.developer.history.push("/DeveloperProfile");
  } else if (localStorage.getItem("Position") === "Admin") {
    yield showNotification({
      data: "Admin Logged-In Successfully",
      type: "success"
    });
    action.developer.history.push("/AdminProfile");
  } else {
    yield showNotification({
      data: "Wrong Email-Id or Password",
      type: "error"
    });
    action.developer.history.push("/DeveloperLog");
  }
  yield put({ type: "DEVELOPERSENDDATA", payload: Data.data });
}
