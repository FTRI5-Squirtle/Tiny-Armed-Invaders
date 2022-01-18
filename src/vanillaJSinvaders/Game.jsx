import React from 'react';
import styled from 'styled-components';
import Instructions from '../components/Instructions';


export default function Game() {
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
  position: relative;
`

document.addEventListener('DOMContentLoaded', () => {
  console.log('state:', state);
const grid = document.querySelector('.grid');
const resultsDisplay = document.querySelector('.results');
let currentShooterIndex = 202;
let width = 15;
let direction= 1;
let invadersId;
let goingRight = true;
let aliensRemoved = [];
let results = 0;
let gameSpeed = 100; //decrement by 100
let army = 0;
let mothership = [0];



for (let i = 0; i < 500; i++) {
  const square = document.createElement('div');
  grid.appendChild(square)
}

const squares = Array.from(document.querySelectorAll('.grid div'));



// fill array with random number 0-40 if aliens removed array does not include includes(number), run random again
let alienInvaders = [0];


function draw() {
    if (aliensRemoved.length > alienInvaders.length-1) {
      alienInvaders = [0];
      mothership.push(++army);
      alienInvaders = new Array(...mothership);
      // army++;
      aliensRemoved = [];
      clearInterval(invadersId);
      gameSpeed -= 100;
      invadersId = setInterval(moveInvaders, gameSpeed);

    }
    for (let i=0; i< alienInvaders.length; i++) {
      if (!aliensRemoved.includes(i)) {
        squares[alienInvaders[i]].classList.add('invader')      
      }
    }
};




function remove() {
    for (let i=0; i< alienInvaders.length; i++) {
      squares[alienInvaders[i]].classList.remove('invader')
    }

};

squares[currentShooterIndex].classList.add('shooter');

function moveShooter(e) {
  // destroy current shooter
  squares[currentShooterIndex].classList.remove('shooter');
  switch(e.key) {
    case 'ArrowLeft':
      // if Shooter is not at the leftmost boundary, decrement index by 1;
      if(currentShooterIndex % width !== 0) {
        currentShooterIndex -=1;
      } break;
      case 'ArrowRight':
      // if Shooter is not at the rightmost boundary, increment index by 1;
        if (currentShooterIndex % width < width -1) {
          currentShooterIndex +=1;
        } break;
  }       
  // redraw shooter
   squares[currentShooterIndex].classList.add('shooter');  
};
document.addEventListener('keydown', moveShooter);


let endGame = false;

function moveInvaders() {
    const leftEdge = alienInvaders[0] % width === 0;
    const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width -1;
    remove();

    if (rightEdge && goingRight){
      for (let i= 0; i< alienInvaders.length; i++) {
        alienInvaders[i] += width +1
        direction = -1;
        goingRight = false;
      }
    }
    if (leftEdge && !goingRight) {
      for (let i= 0; i< alienInvaders.length; i++) {
        alienInvaders[i] += width -1;
        direction = 1;
        goingRight = true;
      }
    }
    for (let i = 0; i < alienInvaders.length; i++) {
      alienInvaders[i] += direction;
    }
    //redraws board after invaders move
    draw();
    if(squares[currentShooterIndex].classList.contains('invader', 'shooter')){
      // console.log('game over');
      resultsDisplay.innerHTML = 'GAME OVER'
      const score = results;
      console.log('username:', state.username);
      console.log('score:', score);
      const reqOptions = { username, score };
      axios.post('/scores', reqOptions);

      clearInterval(invadersId);
    };
//! this needs work.
    for (let i = 0; i < alienInvaders.length; i++){
      if (alienInvaders[i] > (squares.length)){
        resultsDisplay.innerHTML = 'GAME OVER'; 
        clearInterval(invadersId);
      }
    };

    if (aliensRemoved.length === alienInvaders.length) {
      changeArmy = true;
      endGame = true;
      // resultsDisplay.innerHTML = 'YOU WIN';
      clearInterval(invadersId);
      draw();
    }
}



invadersId = setInterval(moveInvaders, gameSpeed);

function shoot(e) {
  let laserId;
  let currentLaserIndex = currentShooterIndex;

  function moveLaser() {
    squares[currentLaserIndex].classList.remove('laser');
    currentLaserIndex -= width;
    squares[currentLaserIndex].classList.add('laser');
    if(squares[currentLaserIndex].classList.contains('invader')){
      squares[currentLaserIndex].classList.remove('laser');
      squares[currentLaserIndex].classList.remove('invader');
      squares[currentLaserIndex].classList.add('boom');
      
      setTimeout(()=> squares[currentLaserIndex].classList.remove('boom'), 300);
      clearInterval(laserId);

      const alienRemoval = alienInvaders.indexOf(currentLaserIndex);
      results++;
      resultsDisplay.innerHTML= results;
      aliensRemoved.push(alienRemoval);

    } 
  }



  switch(e.key) {
    case 'ArrowUp':
    laserId = setInterval(moveLaser, 100)
  }
}
document.addEventListener('keydown', shoot);

});
function refreshPage() {
  window.location.reload(false);
}

return(
  <div>
    <Container>
    <h1 class="results">0</h1>
    <div class="grid"></div>
    </Container>
    <Instructions />
    <Container>
    <Button className="bouncy" onClick={refreshPage}>Start Game</Button>
    </Container>
  </div>
)
}
