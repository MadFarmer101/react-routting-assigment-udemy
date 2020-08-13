import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch,
  Redirect,
} from "react-router-dom";
import Courses from "./containers/Courses/Courses";
import Users from "./containers/Users/Users";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <nav>
              <ul>
                <li>
                  <NavLink to="/courses">Courses</NavLink>
                </li>
                <li>
                  <NavLink to="/users">Users</NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <Switch>
            <Route path="/" exact />
            <Route path="/courses" component={Courses} />
            <Route path="/users" exact component={Users} />
            <Redirect from="/all-courses" to="/courses" />
            <Route render={() => <h2>Ooops! 404 Error! Unknown URL!</h2>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
