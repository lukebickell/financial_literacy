import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Courses extends Component {

  render() {
    return (
      <div className="main-page-container">
        <h2>What would you like to learn about?</h2>

        <div className="courses-container">

          <div className="course-box-wrapper">
            <span className="course-box">
              Credit
            </span>
          </div>

                    <div className="course-box-wrapper">
            <span className="course-box">
              Credit
            </span>
          </div>
       
                 <div className="course-box-wrapper">
            <span className="course-box">
              Credit
            </span>
          </div>
       
       
        </div>

      </div>
    );
  }
}

export default Courses;
