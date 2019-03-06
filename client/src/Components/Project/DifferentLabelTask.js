import React, { Component } from "react";
import "../../App.css";
import { Redirect } from "react-router-dom";
class DifferentLabelTask extends Component {
  constructor() {
    super();
    this.state = {
      Status: ""
    };
  }
  onDragOver = ev => {
    ev.preventDefault();
  };
  onDragStart = (ev, Id) => {
    ev.dataTransfer.setData("Id", Id);
  };
  onDrop = async (ev, Status) => {
    let id = ev.dataTransfer.getData("Id");
    const taskStatus = {
      TaskId: id,
      TaskStatus: Status
    };
    await this.props.TaskStatus(taskStatus);
    await this.props.ListTask(this.props.history);
  };
  componentDidMount = () => {
    if (
      localStorage.getItem("Token") &&
      localStorage.getItem("Position") === "Developer"
    ) {
      this.props.ListTask(this.props.history);
    }
  };
  render() {
    if (
      localStorage.getItem("Token") &&
      localStorage.getItem("Position") === "Developer"
    ) {
      return (
        <div>
          <br />
          <div className="container-drag row">
            <div
              className="wip col"
              onDragOver={e => this.onDragOver(e)}
              onDrop={e => this.onDrop(e, "In-Processing")}
            >
              <label className="alert alert-success">
                In-Proccessing Tasks
              </label>

              {this.props.getListTask.map(post => (
                <div key={post._id}>
                  {post.Task_Status === "In-Processing" ? (
                    <div
                      className="col p-1 alert alert-success"
                      draggable
                      onDragStart={e => this.onDragStart(e, post._id)}
                    >
                      <div>{post.Task_Name}</div>
                      <div>{post._id}</div>
                      <div>Start-Date:-{post.Start_Date}</div>
                      <div>Submission-Date:-{post.Submission_Date}</div>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
            <div className="col">
              <div
                className="droppableNew"
                onDragOver={e => this.onDragOver(e)}
                onDrop={e => this.onDrop(e, "Under-Testing")}
              >
                <label className="alert alert-primary">Under-Testing</label>
                {this.props.getListTask.map(post => (
                  <div key={post._id}>
                    {post.Task_Status === "Under-Testing" ? (
                      <div
                        className="col p-1 alert alert-primary"
                        draggable
                        onDragStart={e => this.onDragStart(e, post._id)}
                      >
                        <div>{post.Task_Name}</div>
                        <div>{post._id}</div>
                        <div>Start-Date:-{post.Start_Date}</div>
                        <div>Submission-Date:-{post.Submission_Date}</div>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
            <div className="col">
              <div
                className="droppable"
                onDragOver={e => this.onDragOver(e)}
                onDrop={e => this.onDrop(e, "Complete")}
              >
                <label className="alert alert-warning">Complete-Tasks</label>
                {this.props.getListTask.map(post => (
                  <div key={post._id}>
                    {post.Task_Status === "Complete" ? (
                      <div
                        className="col p-1 alert alert-warning"
                        draggable
                        onDragStart={e => this.onDragStart(e, post._id)}
                      >
                        <div>{post.Task_Name}</div>
                        <div>{post._id}</div>
                        <div>Start-Date:-{post.Start_Date}</div>
                        <div>Submission-Date:-{post.Submission_Date}</div>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <Redirect to="DeveloperLog" />;
    }
  }
}

export default DifferentLabelTask;
