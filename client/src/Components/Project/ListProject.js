import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
class ListProject extends Component {
  constructor() {
    super();
    this.state = {
      Task_Name: "",
      Start_Date: "",
      Submission_Date: "",
      Total_Developers: [],
      Task_Discription: "",
      Project_Id: "",
      Developer_Id: "",
      Id: "",
      Project_Status: ""
    };
  }
  handleTask = async e => {
    localStorage.setItem("Project_Id", e.target.value);

    this.props.history.push({
      pathname: "TaskList",
      state: { id: this.state.Id }
    });
  };
  handleShow = e => {
    this.setState({ Id: e.target.value, show: true });
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleClose = () => {
    this.setState({ Show: false, show: false });
  };
  inviteDeveloper = async e => {
    await this.setState({
      Project_Id: e.target.value,
      Show: true
    });
  };
  handleLabel = async e => {
    const projectStatus = {
      ProjectId: e.target.value,
      ProjectStatus: this.state.Project_Status
    };

    await this.props.ProjectStatus(projectStatus);
  };
  handleInvite = async e => {
    await this.setState({
      Developer_Id: e.target.value
    });
    const values = {
      ProjectId: this.state.Project_Id,
      DeveloperId: this.state.Developer_Id
    };

    this.props.InviteDeveloper(values);
  };
  handleClick = async () => {
    var formData = {
      Task_Name: this.state.Task_Name,
      Start_Date: this.state.Start_Date,
      Submission_Date: this.state.Submission_Date,
      Total_Developers: this.state.Total_Developers,
      Task_Discription: this.state.Task_Discription,
      Project_Id: this.state.Id
    };
    await this.props.AddTask(formData);
    this.setState({
      Task_Name: "",
      Start_Date: "",
      Submission_Date: "",
      Total_Developers: [],
      Task_Discription: ""
    });
    this.handleClose();
  };
  componentWillMount() {
    this.props.ListProject();
    this.props.ListDeveloper();
  }

  render() {
    if (
      localStorage.getItem("Token") &&
      localStorage.getItem("Token") !== "undefined"
    ) {
      return (
        <div>
          <Modal
            show={this.state.show}
            onHide={this.handleClose}
            aria-labelledby="contained-modal-title-vcenter"
          >
            <div>
              <nav className="nav bg-light" />
              <div className="container">
                <div className="row">
                  <div className="col-lg" />
                  <div className="col-lg m-5 p-5">
                    <div className="form-group shadow-textarea">
                      <h4>Task Details</h4>
                      <input
                        type="text"
                        name="Task_Name"
                        onChange={this.onChange}
                        className="form-control"
                        placeholder="Title..."
                        value={this.state.Task_Name}
                      />
                      <br />
                      <input
                        type="date"
                        name="Start_Date"
                        onChange={this.onChange}
                        className="form-control"
                        placeholder="../../...."
                        value={this.state.Start_Date}
                      />
                      <br />
                      <input
                        type="date"
                        name="Submission_Date"
                        onChange={this.onChange}
                        className="form-control"
                        placeholder="../../...."
                        value={this.state.Submission_Date}
                      />
                      <br />
                      <textarea
                        className="form-control"
                        type="text"
                        name="Total_Developers"
                        onChange={this.onChange}
                        placeholder="Task Assign To"
                        value={this.state.Total_Developers}
                      />
                      <br />
                      <textarea
                        className="form-control"
                        type="text"
                        name="Task_Discription"
                        onChange={this.onChange}
                        placeholder="Task_Discription"
                        value={this.state.Task_Discription}
                      />
                      <br />
                      <button
                        className="badge btn-primary "
                        onClick={this.handleClick}
                      >
                        SUBMIT
                      </button>

                      <button
                        className="ml-3 badge btn-success "
                        onClick={this.handleClose}
                      >
                        CLOSE
                      </button>
                    </div>
                  </div>
                  <div className="col-lg" />
                </div>
              </div>
            </div>
          </Modal>
          <nav className="nav-tabs">
            {" "}
            {localStorage.getItem("Position") === "Admin" ? (
              <li className="nav justify-content-end nav nav-tabs">
                <Link
                  to="/AdminProfile"
                  className="nav-link active btn-primary"
                >
                  Profile
                </Link>
              </li>
            ) : (
              <li className="nav justify-content-end nav nav-tabs">
                <Link
                  to="/DeveloperProfile"
                  className="nav-link active btn-primary"
                >
                  Profile
                </Link>
                <nav className="nav bg-light">
                  <li className="nav-item">
                    <Link
                      to="/ProjectsLabel"
                      className="ml-2 nav-link active btn-primary"
                    >
                      Labels
                    </Link>
                  </li>
                </nav>
              </li>
            )}
          </nav>

          <div className="container -fluid ">
            <h1>Project List</h1>
            {this.props.getListProject.map(post => (
              <ul key={post._id}>
                <ul className="lighten-3 m-2">
                  <div className="p-3  alert alert-danger">
                    <div className="container">
                      <div className="row justify-content-start">
                        <div className="col p-1 alert alert-success">
                          <label>Project title</label>
                          <div>
                            <p>
                              <b>{post.Project_Name}</b>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="row justify-content-start">
                        <div className="col p-1 alert alert-info">
                          <label>Project Start</label>
                          <div>
                            <b>{post.Start_Date}</b>
                          </div>
                        </div>
                        <hr />
                        <div className="col ml-5 p-1 alert alert-info">
                          <label>Project Submit</label>
                          <div>
                            <p>
                              <b>{post.Submission_Date}</b>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="row justify-content-start">
                        <div className="col p-1 alert alert-info">
                          <label>Project Id</label>
                          <div>
                            <p>
                              <b>{post._id}</b>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="row justify-content-start">
                        <div className="col p-1 alert alert-info">
                          <label>Project Details</label>
                          <div>
                            <p>
                              <b>{post.Project_Discription}</b>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row justify-content-start">
                        <div className="col p-1 alert alert-info">
                          <label>Developers</label>
                          <div>
                            <p>
                              {post.Workers.map(get => (
                                <b key={Math.random()}>
                                  {get}
                                  <br />
                                </b>
                              ))}
                            </p>
                          </div>
                        </div>
                      </div>

                      {localStorage.getItem("Position") === "Developer" ? (
                        <div className="row justify-content-start">
                          <div className="col">
                            <select
                              className="form-control"
                              name="Project_Status"
                              onChange={this.onChange}
                            >
                              <option value="In-Processing">
                                In-Processing
                              </option>
                              <option value="Under-Testing">
                                Under-Testing
                              </option>
                              <option value="Complete">Complete</option>
                            </select>
                            <div className="col">
                              <button
                                className="badge btn-success"
                                value={post._id}
                                onClick={this.handleLabel}
                              >
                                STATUS
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="row justify-content-start">
                          <div className="col p-1 border border-danger">
                            <label>Project Status</label>
                            <div>
                              <p>
                                <b>{post.Project_Status}</b>
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <Modal
                    className="container"
                    show={this.state.Show}
                    onHide={this.handleClose}
                  >
                    {this.props.getListDeveloper.map(developer => (
                      <div key={developer._id}>
                        <br />
                        <li>
                          Name:{developer.Name}
                          <br />
                          Email:{developer.Email}
                        </li>

                        <button
                          className="badge btn-success"
                          value={developer._id}
                          id={post._id}
                          onClick={this.handleInvite}
                        >
                          Invite
                        </button>
                        <br />
                      </div>
                    ))}
                    <br />
                    <button
                      onClick={this.handleClose}
                      className="badge-primary"
                    >
                      Done
                    </button>
                  </Modal>

                  <div className="row">
                    {localStorage.getItem("Position") === "Admin" ? (
                      <div className="col">
                        <button
                          onClick={this.inviteDeveloper}
                          value={post._id}
                          className="badge btn-success"
                        >
                          Invite Developers
                        </button>
                      </div>
                    ) : null}
                    <div className="col">
                      <div>
                        <button
                          onClick={this.handleShow}
                          value={post._id}
                          className="badge btn-warning"
                        >
                          ADD-TASK
                        </button>
                      </div>
                    </div>
                    <div className="col">
                      <div>
                        <button
                          onClick={this.handleTask}
                          value={post._id}
                          className="badge btn-primary"
                        >
                          TASKS
                        </button>
                      </div>
                    </div>
                  </div>
                </ul>
              </ul>
            ))}
          </div>
        </div>
      );
    } else {
      return <Redirect to="/DeveloperLog" />;
    }
  }
}

export default ListProject;
