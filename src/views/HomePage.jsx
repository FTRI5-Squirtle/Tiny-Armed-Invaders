import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from "react-player"
// import Game from '../vanillaJSinvaders/Game.js';

export default function HomePage() {
    return(
      <div class="background-container">
               
          {/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt=""/>
          <div class="stars"></div>
          <div class="twinkling"></div>
          <div class="clouds"></div>
       */}
        <h1 >This is a homepage with tiny arms.</h1>
        <Link to = "/signup">
          <button id="signupButton">Sign Up</button>
        </Link>
        <Link to = "/login">
          <button id="loginButton">Login</button>
        </Link>
        <h2>I'm a Marketing thingy</h2>
        <div>
        <a href="http://github.com/login/oauth/authorize?response_type=code&client_id=403beed96884fcf48e82&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fgame">
          <button>GitHub Signin</button>
        </a>
          {/* <a onclick="location.href = 'http://github.com/login/oauth/authorize?response_type=code&client_id=403beed96884fcf48e82&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fauth%2Fgithub%2Fcallback';" id="myButton" >GitHub Login</a> */}
      <ReactPlayer
        url="https://youtu.be/MztdzGQ_IuM"
        controls
      />
    </div>

      </div>
    );
};