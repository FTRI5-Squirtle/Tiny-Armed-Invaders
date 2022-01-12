//This is the file that is exported and then rendered by your entry point 'index.js'
//If you are planning on utilizing React Routers, I have set up a boilerplate below this component with some example routing.
//React Routers are not included in this boilerplate so if you plan on using React Routers, you would need to install react-router-dom
//Otherwise this file would act as your initial component.  Happy coding!

//import React, { useState, useRef, useEffect  }  from 'react';
// import GameBoard from './components/GameBoard.jsx';
// import SignUp from './views/SignUp.jsx';
// import Login from './views/Login.jsx';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import HomePage from './views/HomePage.jsx';

//export default App;

//*snek code
/*

import { useInterval } from "./useIntervals.js";

import {
  CANVAS_SIZE,
  SNAKE_START,
  HERO,
  SCALE,
  SPEED,
  DIRECTIONS,
  TREX_START
} from "./constants";

const App = () => {
  const canvasRef = useRef();
  const [snake, setSnake] = useState(SNAKE_START);
  const [snake2, setSnake2] = useState(TREX_START);
  const [apple, setApple] = useState(HERO);
  const [dir, setDir] = useState([0, -1]);
  const [speed, setSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  useInterval(() => gameLoop(), speed);

  const endGame = () => {
    setSpeed(null);
    setGameOver(true);
  };

  const moveSnake = ({ keyCode }) =>
    keyCode >= 37 && keyCode <= 40 && setDir(DIRECTIONS[keyCode]);

  const moveHero = ({ keyCode }) =>
    keyCode >= 37 && keyCode <= 40 && setDir(DIRECTIONS[keyCode]);

  const createApple = () =>
    apple.map((_a, i) => Math.floor(Math.random() * (CANVAS_SIZE[i] / SCALE)));

  const checkCollision = (piece, snk = snake) => {
    if (
      piece[0] * SCALE >= CANVAS_SIZE[0] ||
      piece[0] < 0 ||
      piece[1] * SCALE >= CANVAS_SIZE[1] ||
      piece[1] < 0
    )
      return true;

    for (const segment of snk) {
      if (piece[0] === segment[0] && piece[1] === segment[1]) return true;
    }
    return false;
  };

  const checkAppleCollision = newSnake => {
    if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
      let newApple = createApple();
      while (checkCollision(newApple, newSnake)) {
        newApple = createApple();
      }
      setApple(newApple);
      return true;
    }
    return false;
  };

  const gameLoop = () => {
    const snakeCopy = JSON.parse(JSON.stringify(snake));
    const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]];
    snakeCopy.unshift(newSnakeHead);
    if (checkCollision(newSnakeHead)) endGame();
    if (!checkAppleCollision(snakeCopy)) snakeCopy.pop();
    setSnake(snakeCopy);
  };

  const startGame = () => {
    setSnake(SNAKE_START);
    setApple(APPLE_START);
    setDir([0, 1]);
    setSpeed(SPEED);
    setGameOver(false);
  };

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    context.fillStyle = "pink";
    snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1));
    context.fillStyle = "lightblue";
    context.fillRect(apple[0], apple[1], 1, 1);
  }, [snake, apple, gameOver]);

  return (
    <div role="button" tabIndex="0" onKeyDown={e => moveSnake(e)}>
      <canvas
        style={{ border: "1px solid black" }}
        ref={canvasRef}
        width={`${CANVAS_SIZE[0]}px`}
        height={`${CANVAS_SIZE[1]}px`}
      />
      {gameOver && <div>GAME OVER!</div>}
      <button onClick={startGame}>Start Game</button>
    </div>
  );
};

*/
//!original code
// export default function App() {
  
//   return (
//     <div className='App'>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/gameboard" element={<GameBoard />} />
//       </Routes>
//     </BrowserRouter>
//     </div>
//   );
// }
// const App = () => (
//   <div className='App'>
//     <HomePage />
//     <GameBoard />
//   </div>
// )

// class App extends Component {
//   constructor () {
//     super()
//   }
//   render(){
//   return(
//       <div className='App'>
//         <h1>Tiny Armed Invaders</h1>
//         <GameBoard />
//       </div>
//   );}
// }
// export default App;
