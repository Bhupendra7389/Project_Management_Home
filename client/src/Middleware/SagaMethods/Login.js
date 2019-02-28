import axios from "axios";
import { put } from "redux-saga/effects";

export default function* userLogin(action) {
  let Data = yield axios.post("/Login/UserLogin", action.developer);

  localStorage.setItem("Token", Data.data.token);
  localStorage.setItem("Email", Data.data.user.Email);
  localStorage.setItem("Name", Data.data.user.Name);
  localStorage.setItem("Position", Data.data.user.Position);
  localStorage.setItem("_id", Data.data.user._id);

  if (
    localStorage.getItem("Token") &&
    localStorage.getItem("Position") === "Developer"
  ) {
    action.developer.history.push("/DeveloperProfile");
  } else if (localStorage.getItem("Position") === "Admin") {
    action.developer.history.push("/AdminProfile");
  } else {
    action.developer.history.push("/DeveloperLog");
  }

  yield put({ type: "DEVELOPERSENDDATA", payload: Data.data });
}
