import { connect } from "react-redux";
import Projects from "../Components/Project/Projects";
import { addProject } from "../Actions/Projects";
const mapDispatchToProps = dispatch => {
  return {
    AddProject: project => dispatch(addProject(project))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Projects);
