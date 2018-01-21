import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ModulePreview extends Component {
    constructor(props) {
      super(props);
      console.log(this.props.course);
    }

    render() {
      return (
          <div className="module-preview-box">
            <h3>{this.props.course.title}</h3>
            <div className="module-description-text">
              {this.props.course.description}
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
