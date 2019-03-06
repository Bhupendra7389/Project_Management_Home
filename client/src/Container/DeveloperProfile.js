import DeveloperProfile from "../Components/Developer/DeveloperProfile";
import { connect } from "react-redux";
import {
  invitedByProject,
  invitesById,
  inviteResponse,
  deleteDeveloperInvite
} from "../Actions/DeveloperProfile";
const mapDispatchToProps = dispatch => {
  return {
    InvitedByProject: id => dispatch(invitedByProject(id)),
    InvitesById: id => dispatch(invitesById(id)),
    InviteResponse: user => dispatch(inviteResponse(user)),
    DeleteDeveloperInvite: userValue =>
      dispatch(deleteDeveloperInvite(userValue))
  };
};
const mapStateToProps = state => {
  return {
    Token: state.DeveloperData,
    Projects: state.InvitedDeveloper,
    InviteFor: state.Projects
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeveloperProfile);
