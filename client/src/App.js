import React, { Component } from "react";
import { Switch, Link, Route } from "react-router-dom";
import "./App.css";
import DeveloperLogin from "./Container/Login";
import DeveloperRegistration from "./Container/Registration";
import Projects from "./Container/Projects";
import Home from "./Home";
import "./bootstrap.css";

import AdminProfile from "./Container/AdiminProfile";
import ListProject from "./Container/ListProject";
import DeveloperProfile from "./Container/DeveloperProfile";
import ListTask from "./Container/ListTask";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <nav className="nav bg-dark">
            <li className="nav-item">
              <Link to="/Home" className="nav-link active">
                Home
              </Link>
            </li>
          </nav>
          <Switch>
            <Route path="/DeveloperProfile" component={DeveloperProfile} />
            <Route path="/Projects" component={Projects} />
            <Route path="/Home" component={Home} />
            <Route path="/DeveloperReg" component={DeveloperRegistration} />
            <Route path="/DeveloperLog" component={DeveloperLogin} />

            <Route path="/AdminProfile" component={AdminProfile} />
            <Route path="/ProjectList" component={ListProject} />
            <Route path="/TaskList" component={ListTask} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
