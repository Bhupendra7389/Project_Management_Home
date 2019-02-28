import axios from "axios";
export default function* inviteDeveloper(action) {
  yield axios.post("/Invite/Developer", action.Ids).then(res => {
    return res.data;
  });
}
