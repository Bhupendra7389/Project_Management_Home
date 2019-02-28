import React, { Component } from "react";
class DeveloperLogin extends Component {
  constructor() {
    super();
    this.state = {
      Email: "",
      Password: ""
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
      history: this.props.history
    };
    this.props.DeveloperLogin(formData);
    this.setState({
      Email: "",
      Password: ""
    });
  };

  render() {
    return (
      <div>
        <div>
          <div className="row">
            <div className="col-lg" />
            <div className="col-lg m-5 p-5">
              <div className="form-group shadow-textarea" />
              <h3>Login User</h3>
              <input
                type="text"
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
              <button className="btn btn-primary " onClick={this.handleClick}>
                Log-In
              </button>
            </div>
            <div className="col-lg" />
          </div>
        </div>
      </div>
    );
  }
}
export default DeveloperLogin;
