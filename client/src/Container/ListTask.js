import { connect } from "react-redux";
import ListTask from "../Components/Project/ListTask";
import { addTask } from "../Actions/ListProjectActions";
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
    Comment: post => dispatch(comment(post))
  };
};
const mapStateToProps = state => {
  return {
    getListTask: state.TaskList,
    getTask: state.Task
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTask);
