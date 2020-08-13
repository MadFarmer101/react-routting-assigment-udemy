import React, { Component } from "react";
import "./Courses.css";
import { Route, Link } from "react-router-dom";
import Course from "../Course/Course";

class Courses extends Component {
  state = {
    courses: [
      { id: 1, title: "Angular - The Complete Guide" },
      { id: 2, title: "Vue - The Complete Guide" },
      { id: 3, title: "PWA - The Complete Guide" },
    ],
  };

  render() {
    return (
      <div>
        <h1>Amazing Udemy Courses</h1>
        <section className="Courses">
          {this.state.courses.map((course) => {
            return (
              <Link
                to={{ pathname: "/courses/" + course.id, query: course.title }}
                key={course.id}
              >
                <article className="Course">{course.title}</article>
              </Link>
            );
          })}
          <Route
            path={this.props.match.url + "/:id"}
            exact
            component={Course}
          />
        </section>
      </div>
    );
  }
}

export default Courses;
