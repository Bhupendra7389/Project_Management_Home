import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Noty from "noty";
import "../../../node_modules/noty/lib/noty.css";
import "../../../node_modules/noty/lib/themes/bootstrap-v4.css";
class DeveloperProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Id: ""
    };
  }
  showNotification = user => {
    new Noty({
      theme: "bootstrap-v4",
      type: user.type,
      layout: "topRight",
      text: user.data,
      timeout: 1000
    }).show();
  };

  handleResponse = async e => {
    const User = {
      ProjectId: e.target.value,
      DeveloperId: this.state.Id,
      DeveloperEmail: localStorage.getItem("Email")
    };
    await this.props.InviteResponse(User);
    await this.props.DeleteDeveloperInvite(User);
    await this.props.InvitedByProject(localStorage.getItem("_id"));
    await this.setState({ subModelShow: false });
  };
  closeSubModal = () => {
    this.setState({ subModelShow: false });
  };
  handleClose = () => {
    this.setState({ Show: false, subModelShow: false });
  };
  handleShow = () => {
    this.setState({ Show: true });
  };
  handleLogout = () => {
    localStorage.clear();
    this.showNotification({
      data: "Logged-Out Successful",
      type: "success"
    });
    this.props.history.push("/DeveloperLog");
  };

  componentWillMount = () => {
    this.props.InvitedByProject(localStorage.getItem("_id"));
  };
  handleInvites = e => {
    this.setState({ subModelShow: true, Id: e.target.id });
    this.props.InvitesById(e.target.value);
  };

  render() {
    if (
      localStorage.getItem("Token") &&
      localStorage.getItem("Position") === "Developer"
    ) {
      return (
        <div className="container">
          <nav className="nav justify-content-end nav nav-tabs">
            <div className="nav">
              <li className="nav ml-2 justify-content-end nav nav-tabs">
                <Link
                  to="/DeveloperProfile"
                  className="nav-link active btn-primary"
                >
                  Profile
                </Link>
              </li>

              <li className="nav ml-2 justify-content-end nav nav-tabs">
                <Link to="/ProjectList" className="nav-link active btn-primary">
                  Projects
                </Link>
              </li>

              <li className="nav ml-2 justify-content-end nav nav-tabs">
                <button
                  onClick={this.handleLogout}
                  className="nav-link active btn-primary"
                >
                  Log-Out
                </button>
              </li>
            </div>
          </nav>

          <h3>Profile</h3>

          <div className="row">
            <div className="col">
              <p>Name:-{localStorage.getItem("Name")}</p>
            </div>
            <div className="col">
              <p>Profession:-{localStorage.getItem("Position")}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>Id:-{localStorage.getItem("_id")}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>E-mail:-{localStorage.getItem("Email")}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Modal
                show={this.state.subModelShow}
                onHide={this.handleClose}
                size="sm"
              >
                {this.props.InviteFor.map(invite => (
                  <ul key={invite._id}>
                    <div>
                      {invite.Project_Name}
                      <br />
                      {invite.Start_Date}
                      <br />
                      {invite.Submission_Date}
                      <br />
                      {invite.Project_Discription}
                      <br />
                      <button
                        className="badge btn-primary"
                        value={invite._id}
                        onClick={this.handleResponse}
                      >
                        ACCEPT
                      </button>

                      <button
                        className="badge btn-danger"
                        onClick={this.closeSubModal}
                      >
                        CLOSE
                      </button>
                    </div>
                  </ul>
                ))}
              </Modal>
              <Modal size="lg" show={this.state.Show} onHide={this.handleClose}>
                {this.props.Projects.length &&
                  this.props.Projects.map(postData => (
                    <ul key={postData._id}>
                      <div className="badge btn-danger">
                        <button
                          value={postData.ProjectId}
                          id={postData.DeveloperId}
                          onClick={this.handleInvites}
                        >
                          ONPROJECT
                        </button>
                        <br />
                      </div>
                    </ul>
                  ))}
                <button
                  className="badge btn-primary"
                  onClick={this.handleClose}
                >
                  CLOSE
                </button>
              </Modal>
              <button className="badge btn-warning" onClick={this.handleShow}>
                Invite's
              </button>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <Redirect to="/Developerlog" />
      </div>
    );
  }
}
export default DeveloperProfile;
