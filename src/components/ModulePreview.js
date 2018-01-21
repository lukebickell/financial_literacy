import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ModulePreview extends Component {
    constructor(props) {
      super(props);

      this.state = {
      }
    }

    render() {

      return (
          
          <div className="module-preview-box">

            <Link to={`/courses/${this.props.courseId ? this.props.courseId : ""}/${this.props.index ? this.props.index : ""}`}>
              <h3>{this.props.course.submodules ? this.props.course.submodules[this.props.index].title : ""}</h3>
            </Link>

            <div className="module-description-text">
              {this.props.course.submodules ? this.props.course.submodules[this.props.index].subtitle : ""}
            </div>

            <div className="module-progress-container">
              <div className="module-progress-bar">
                50%
              </div>
            </div>

          </div>
          );

    }
}

export default ModulePreview;
