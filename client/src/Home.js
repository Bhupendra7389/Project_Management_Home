import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Noty from "noty";
import "../node_modules/noty/lib/noty.css";
import "../node_modules/noty/lib/themes/bootstrap-v4.css";

class Home extends Component {
  showNotification = user => {
    new Noty({
      theme: "bootstrap-v4",
      type: user.type,
      layout: "topRight",
      text: user.data,
      timeout: 1000
    }).show();
  };

  render() {
    if (!localStorage.getItem("Token")) {
      return (
        <div>
          <nav className="nav justify-content-end nav  ">
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
      );
    } else if (
      localStorage.getItem("Token") &&
      localStorage.getItem("Position") === "Developer"
    ) {
      this.showNotification({
        data: "Already Logged-In",
        type: "success"
      });

      return <Redirect to="DeveloperProfile" />;
    } else if (
      localStorage.getItem("Token") &&
      localStorage.getItem("Position") === "Admin"
    ) {
      this.showNotification({
        data: "Already Logged-In",
        type: "success"
      });
      return <Redirect to="AdminProfile" />;
    } else {
      return null;
    }
  }
}

export default Home;
