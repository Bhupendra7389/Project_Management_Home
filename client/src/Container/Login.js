import DeveloperLogin from "../Components/Developer/Login";
import { connect } from "react-redux";
import { login } from "../Actions/LoginActions";
const mapDispatchToProps = dispatch => {
  return {
    DeveloperLogin: developer => dispatch(login(developer))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(DeveloperLogin);
