import axios from "axios";
import { put } from "redux-saga/effects";
import Noty from "noty";
import "../../../node_modules/noty/lib/noty.css";
import "../../../node_modules/noty/lib/themes/bootstrap-v4.css";

export default function* userLogin(action) {
  let Data = yield axios.post("/Login/UserLogin", action.developer);
  if (Data.data.token && Data.data.token !== "undefined") {
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
    action.developer.history.push("/DeveloperProfile");
    yield showNotification({
      data: " Developer Logged-In Successful",
      type: "success"
    });
  } else if (localStorage.getItem("Position") === "Admin") {
    action.developer.history.push("/AdminProfile");
    yield showNotification({
      data: " Admin Logged-In Successful",
      type: "success"
    });
  } else {
    action.developer.history.push("/DeveloperLog");
    yield showNotification({
      data: " Wrong User-Id or Password",
      type: "error"
    });
  }

  yield put({ type: "DEVELOPERSENDDATA", payload: Data.data });
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
