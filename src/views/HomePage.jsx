import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
// import Game from '../vanillaJSinvaders/Game.js';

export default function HomePage() {
  const Button = styled.button`
  font-family: 'Bangers', cursive;
  // background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

const Container = styled.div`
  text-align: center;
`
    return(
      <div>
        <Container>
        <h1>ATTACK OF THE TINY ARM INVADERS.</h1>
        </Container>
          <Link to = "/signup">
        <Container>
            <Button id="signupButton">New Here? Answer the Call.</Button>
        </Container>
        </Link>
        <Link to = "/login">
        <Container>
          <Button className="bouncy" id="loginButton">Faced Them Before? Enter the Battlefield.</Button>
        </Container>
        </Link>
        <Container><h2> Long, long ago, Dinosaurs Roamed the Earth. </h2>
        <h2> We Thought We Were Safe. Then They Returned. </h2>
        <h2>In SpaceShips... and JetPacks.</h2></Container>
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