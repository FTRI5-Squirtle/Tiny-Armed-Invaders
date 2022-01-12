
const grid = document.querySelector('.grid');
const resultsDisplay = document.querySelector('.results');
let currentShooterIndex = 202;
let width = 15;
let direction= 1;
let invadersId;
let goingRight = true;
let aliensRemoved = []; //!can accrue score here based on array length
let results = 0;
let gameSpeed = 1000; //decrement by 100

for (let i = 0; i < 500; i++) {
  const square = document.createElement('div');
  grid.appendChild(square)
}

const squares = Array.from(document.querySelectorAll('.grid div'));



// fill array with random number 0-40 if aliens removed array does not include includes(number), run random again
const alienInvaders = [ 
  //0
  0,1,2,3
  // 15,16,17,18,19,20,21,22,23,24,
  // 30, 31, 32, 33, 34, 35, 36, 37, 38, 39
];

function draw() {
  console.log(aliensRemoved);
  if (aliensRemoved.length > 3) {
    aliensRemoved = [];
    gameSpeed -= 100;
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
    clearInterval(invadersId);
  };

  for (let i = 0; i < alienInvaders.length; i++){
    if (alienInvaders[i] > (squares.length)){
      resultsDisplay.innerHTML = 'GAME OVER'; 
      clearInterval(invadersId);
    }
  };

  if (aliensRemoved.length === alienInvaders.length) {
    endGame = true;
    // resultsDisplay.innerHTML = 'YOU WIN';
    clearInterval(invadersId);
    draw();
  }
  
}

function restart(endGame) {
  if(endGame === true) {
    return;
  }
  //initialize
  draw();
  moveInvaders()
  return restart(endgame);
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
