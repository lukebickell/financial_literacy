import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class NavBar extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    buttonOnClick() {
      console.log('this is', this);
    }

    render() {
      return (
          <nav>
            <div className="leftbutton">
              <Link to="/"><button text="FinEd" className="homebutton"  onClick={this.buttonOnClick} >FinEd</button></Link>
            </div>
            <div className="rightbutton ">
              <Link to="/signUp"><button text="Sign Out" className="homebutton" onClick={this.buttonOnClick} >Sign Out </button></Link>
            </div>
            <div className="rightbutton ">
              <Link to="/signIn"><button text="Sign In" className="homebutton" onClick={this.buttonOnClick} >Sign In </button></Link>
            </div>
          </nav>
      );
    }
}

export default NavBar;
