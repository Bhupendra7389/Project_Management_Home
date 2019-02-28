import axios from "axios";
export default function* addProject(action) {
  yield axios.post("/Add/Project", action.project).then(res => {
    return res.data;
  });
}
