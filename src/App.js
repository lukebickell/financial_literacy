import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from "./components/Home";
import Courses from "./components/Courses";
import CoursePage from "./components/CoursePage";

class FadeIn extends Component {
  componentDidMount() {
    console.log("componentDidMount", this.displayName);
    var that = this;
    // get the components DOM node
    var elem = ReactDOM.findDOMNode(that);
    // set the opacity of the element to 0
    elem.style.opacity = 0;
    window.requestAnimationFrame(function () {
      // now set a transition on the opacity
      elem.style.transition = that.props.transition || "opacity 4000ms";
      // and set the opacity to 1
      elem.style.opacity = 1;
    });
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }

}

const MatchWithFade = ({ component: Component, transition, ...rest }) => (
  <Route {...rest} render={(matchProps) => (
    <FadeIn transition={transition}>
      <Component {...matchProps} />
    </FadeIn>
  )} />
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>

          <MatchWithFade exact path="/" component={Home}/>
          <MatchWithFade exact path="/lessons" component={Courses}/>
          <MatchWithFade path="/courses/:course" component={CoursePage}/>
          <MatchWithFade path="/courses/:courseId/:submoduleId" />

        </div>
      </Router>
    );
  }
}

export default App;
