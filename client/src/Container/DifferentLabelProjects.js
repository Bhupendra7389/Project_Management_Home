import DifferentLabelProjects from "../Components/Project/DifferentLabelProjects";
import { connect } from "react-redux";
import { listProject, projectStatus } from "../Actions/ListProjectActions";

const mapStateToProps = state => {
  return {
    getListProject: state.ProjectList
  };
};
const mapDispatchToProps = dispatch => {
  return {
    ListProject: () => dispatch(listProject()),
    ProjectStatus: ProjectStatus => dispatch(projectStatus(ProjectStatus))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DifferentLabelProjects);
