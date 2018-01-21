import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../firebase';
import ModulePreview from './ModulePreview';

class CoursePage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        courseId : this.props.match.params.courseId,
        course: ""
      };

    }

    componentWillMount() {
        const courseRef = firebase.database().ref('/courses/' + this.state.courseId);
        courseRef.once('value', (snapshot) => {
          this.setState({
            course : snapshot.val()
          });
        })
    }

    renderSubmodules(){
      if (this.state.course.submodules){
        return (
          this.state.course.submodules.map((submodule, index) => {
            return (
              <ModulePreview key={index} course={this.state.course} index={index} courseId={this.state.courseId}/>
            ) 
          }
        ));
      }
      else{
        return (<span />);
      }
    }

    render() {
      return (
          <div className="main-page-container">
            <div className="course-title-container">
              <h2>{this.state.course ? this.state.course.title : ""}</h2>
            </div>

            <div className="course-modules-container">

            {this.renderSubmodules()}
            </div>

          </div>
      );
    }
}

export default CoursePage;
