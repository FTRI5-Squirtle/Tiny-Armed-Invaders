import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from "react-player";
// import axios from 'axios';
// // import Game from '../vanillaJSinvaders/Game.js';
// const handleClick = async (e) => {
//   await fetch('http://localhost:8080/github')
//   }
// ;
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
        <div>
        <form action="/gitHub" method="get">
        <button type="submit" class="btn btn-primary">Sign in with Github</button>
        </form>
        </div>
        <h2>I'm a Marketing thingy</h2>
        <div>
      <ReactPlayer
        url="https://youtu.be/MztdzGQ_IuM"
        controls
      />
    </div>
      </div>
    );
};