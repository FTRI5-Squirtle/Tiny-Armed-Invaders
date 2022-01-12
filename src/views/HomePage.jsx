import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Game from '../vanillaJSinvaders/Game.js';

export default function HomePage() {
    return(
      <div>
        <h1>This is a homepage with tiny arms.</h1>
        <Link to = "/signup">
          <button id="signupButton">Sign Up</button>
        </Link>
        <Link to = "/login">
          <button id="loginButton">Login</button>
        </Link>
        <h2>I'm a Marketing thingy</h2>
        {/* <div>
          <Game />
        </div> */}
      </div>
    );
};