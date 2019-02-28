import Task from "../Components/Project/Task";
import { connect } from "react-redux";
import { addTask } from "../Actions/ListProjectActions";
const mapDispatchToProps = dispatch => {
  return {
    AddTask: task => dispatch(addTask(task))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Task);
