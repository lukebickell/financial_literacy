import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ModulePreview extends Component {
    constructor(props) {
      super(props);
    }

    render() {

      return (
          {/*<Link to={`/courses/${this.props.course ? this.props.course.id : ""}/${this.props.index ? this.props.index : ""}`}>*/}
            <div className="module-preview-box">

              <h3>{this.props.course.submodules ? this.props.course.submodules[this.props.index].title : ""}</h3>

              <div className="module-description-text">
                {this.props.course.submodules ? this.props.course.submodules[this.props.index].subtitle : ""}
              </div>

              <div className="module-progress-container">
                <div className="module-progress-bar">
                  50%
                </div>
              </div>

            </div>
          {/*</Link>-->*/}
          );

    }
}

export default ModulePreview;
