import React, { Component } from "react";

class DeveloperRegistration extends Component {
  constructor() {
    super();
    this.state = {
      Email: "",
      Password: "",
      Name: "",
      Position: ""
    };
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleClick = () => {
    const formData = {
      Email: this.state.Email,
      Password: this.state.Password,
      Name: this.state.Name,
      Position: this.state.Position,
      history: this.props.history
    };
    this.props.DeveloperRegistration(formData);
    this.setState({
      Email: "",
      Password: "",
      Name: "",
      Position: ""
    });
  };
  render() {
    return (
      <div>
        <div>
          <div className="row">
            <div className="col-lg" />
            <div className="col-lg m-5 p-5">
              <div className="form-group shadow-textarea">
                <h4>Welcome User</h4>
                <input
                  type="email"
                  name="Email"
                  onChange={this.onChange}
                  className="form-control"
                  placeholder="Email..."
                  value={this.state.Email}
                />
                <br />
                <input
                  type="password"
                  name="Password"
                  onChange={this.onChange}
                  className="form-control"
                  placeholder="Password..."
                  value={this.state.Password}
                />
                <br />
                <input
                  type="text"
                  name="Name"
                  onChange={this.onChange}
                  className="form-control"
                  placeholder="Full-Name..."
                  value={this.state.Name}
                />
                <br />
                <select
                  className="form-control"
                  type="text"
                  name="Position"
                  onChange={this.onChange}
                >
                  <option value="" disabled selected>
                    Designation...
                  </option>
                  <option value="Developer">Developer</option>
                  <option value="Admin">Admin</option>
                </select>
                <br />

                <button className="btn btn-primary " onClick={this.handleClick}>
                  REGISTER
                </button>
              </div>
            </div>
            <div className="col-lg" />
          </div>
        </div>
      </div>
    );
  }
}

export default DeveloperRegistration;
