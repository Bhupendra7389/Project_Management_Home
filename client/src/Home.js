import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  componentDidMount = () => {
    localStorage.clear();
  };
  render() {
    return (
      <div>
        <div className="container">
          <nav className="nav justify-content-end nav nav-tabs ">
            <li className="nav-item">
              <Link to="/Developerlog" className="nav-link active">
                Log-In
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/DeveloperReg" className="nav-link active">
                Register
              </Link>
            </li>
          </nav>
          <h1>Project Management</h1>
        </div>
      </div>
    );
  }
}

export default Home;
