import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from "react-player"
// import Game from '../vanillaJSinvaders/Game.js';

export default function HomePage() {
    return(
      <div class="homepage">
           
        <h1 >This is a homepage with tiny arms.</h1>
        <Link to = "/signup">
          <button id="signupButton">Sign Up</button>
        </Link>
        <Link to = "/login">
          <button id="loginButton">Login</button>
        </Link>
        <h2>I'm a Marketing thingy</h2>
        <div>
      <ReactPlayer
        url="https://youtu.be/MztdzGQ_IuM"
        controls
      />
    </div>
    {/* <div class="background-container">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt=""/>
          <div class="stars"></div>
          <div class="twinkling"></div>
          <div class="clouds"></div>
        </div> */}
      </div>
    );
};