import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../firebase';
import ModulePreview from './ModulePreview';

class CoursePage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        courseId : this.props.match.params.courseId,
        course : ""
      };

    }

    componentDidMount() {
        const courseRef = firebase.database().ref('/courses/' + this.state.courseId);
        courseRef.once('value', (snapshot) => {
          this.setState({
            course : snapshot.val()
          });
        })
    }

    render() {
      return (
          <div className="main-page-container">
            <div className="course-title-container">
              <h2>{this.state.course.title}</h2>
            </div>

            <div className="course-modules-container">
              <ModulePreview course={this.state.course}/>
              <ModulePreview course={this.state.course}/>
            </div>

          </div>
      );
    }
}

export default CoursePage;
