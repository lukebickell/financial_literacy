import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../firebase';
import '../App.css';

class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: []
    };
  }

  componentDidMount() {
    /* Fetch the courses from the database and populate the courses state array with titles */
    const coursesRef = firebase.database().ref('courses');
    coursesRef.on('value', (snapshot) => {
      let courses = snapshot.val();
      let newState = [];
      for (let course in courses) {
        newState.push({
          id: course,
          title: courses[course].title
        });
      }
      this.setState({
        courses: newState
      });
    });
  }

  render() {
    return (
      <div className="main-page-container">
        <h2>What would you like to learn about?</h2>

        <div className="courses-container">
          
          {this.state.courses.map((course) => {
            return (
              <Link to={`/courses/${course.title}`}>
                <div className="course-box-wrapper">
                  <span className="course-box">
                    {course.title}
                  </span>
                </div>
              </Link> 
            )
          })}

       
        </div>

      </div>
    );
  }
}

export default Courses;
