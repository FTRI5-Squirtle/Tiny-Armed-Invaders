import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';

class HomePage extends Component {
  render() {
    return(
      <div>
        <h1>This is a homepage with tiny arms.</h1>
        <h2>I'm a Sign Up Link</h2>
        {/* <SignUp /> */}
        <h2>I'm the login thingy</h2>
        <Login />
        <h2>I'm a Marketing thingy</h2>
      </div>
    );
  }
};

export default HomePage;