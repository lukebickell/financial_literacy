import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  DefaultRoute,
  RouteHandler
} from 'react-router-dom';


class Home extends Component {
    constructor(props) {
      super(props);
    }

    buttonOnClick() {
      console.log('this is', this);
    }

    render() {
      document.title = "Home";
      return (
          <div className="main-page-container">
            <div>
              <h1 className="bigTitle">Get to know your <span className="text-highlight">finances</span></h1>
            </div>

            <br/><br/><br/>
            <div>
              <p className="subTitle">This is where we talk about the quiz and Luke will fill it in later. Wallet and cash interest and money.</p>
            </div>

            <div className="center-content">
              <Link to="/lessons"><button text="Take the Quiz" className="quizButton" onClick={this.buttonOnClick}>Learn Something New</button></Link>
            </div>
            
            {/*
            <div className="center-content">
              <button text="Learn More" className="discreteButton">Learn More</button>
            </div>
            */}

          </div>
      );
    }
}

export default Home;