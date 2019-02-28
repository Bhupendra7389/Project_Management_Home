import axios from "axios";

export default function* userRegistration(action) {
  let User = yield axios.post("/Register/UserRegistration", action.developer);
  if (User !== Error) {
    action.developer.history.push("/DeveloperLog");
  }
}
