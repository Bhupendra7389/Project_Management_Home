import DifferentLabelTask from "../Components/Project/DifferentLabelTask";
import { connect } from "react-redux";
import { listTask, taskStatus } from "../Actions/ListTask";

const mapStateToProps = state => {
  return {
    getListTask: state.TaskList
  };
};
const mapDispatchToProps = dispatch => {
  return {
    ListTask: () => dispatch(listTask()),
    TaskStatus: Status => dispatch(taskStatus(Status))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DifferentLabelTask);
