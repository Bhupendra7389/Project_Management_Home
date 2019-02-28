import DeveloperRegistration from "../Components/Developer/Registration";
import { connect } from "react-redux";
import { registration } from "../Actions/Registration";
const mapDispatchToProps = dispatch => {
  return {
    DeveloperRegistration: user => dispatch(registration(user))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(DeveloperRegistration);
