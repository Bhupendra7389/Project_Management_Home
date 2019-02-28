import axios from "axios";
export default function* inviteResponse(action) {
  console.log(action.user.DeveloperEmail);
  yield axios.put(
    "http://localhost:8081/Invite/InviteResponse/" + action.user.ProjectId,
    action.user
  );
}
