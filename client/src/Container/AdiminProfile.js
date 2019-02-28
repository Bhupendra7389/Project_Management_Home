import AdminProfile from "../Components/Admin/AdminProfile";
import { connect } from "react-redux";
const mapStateToProps = state => {
  return {
    Token: state.DeveloperData
  };
};

export default connect(
  mapStateToProps,
  null
)(AdminProfile);
