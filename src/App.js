import React, { Component } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from "./components/Home";
import Courses from "./components/Courses";
import CoursePage from "./components/CoursePage";


class App extends Component {


  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Route exact path="/" component={Home} />
          <Route exact path="/lessons" component={Courses} />
          <Route path="/courses/:courseId" component={CoursePage} />
          <Route path="/courses/:courseId/:submoduleId" />
        </div>
      </Router>
    );
  }
}

export default App;
