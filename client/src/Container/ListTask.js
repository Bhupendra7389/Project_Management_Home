import { connect } from "react-redux";
import ListTask from "../Components/Project/ListTask";
import { addTask } from "../Actions/ListProjectActions";
import { invitesById } from "../Actions/DeveloperProfile";
import {
  listTask,
  editTask,
  deleteTask,
  getTaskById,
  comment
} from "../Actions/ListTask";
const mapDispatchToProps = dispatch => {
  return {
    ListTask: history => dispatch(listTask(history)),
    AddTask: task => dispatch(addTask(task)),
    EditTask: edit => dispatch(editTask(edit)),
    DeleteTask: id => dispatch(deleteTask(id)),
    GetTaskById: id => dispatch(getTaskById(id)),
    Comment: post => dispatch(comment(post)),
    InvitesById: id => dispatch(invitesById(id))
  };
};
const mapStateToProps = state => {
  return {
    getListTask: state.TaskList,
    getTask: state.Task,
    getProject: state.Projects
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTask);
