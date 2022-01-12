// import React, { Component } from 'react';
import Display from './Display.jsx'
import Space from './board/Space.jsx';
import Earth from './board/Earth.jsx'
import StartButton from './StartButton.jsx';
import { createSpace, createEarth } from './gameHelpers.jsx';
import { StyledGameBoardWrapper, StyledGameBoard } from './styles/StyledGameBoard.jsx';
import React, { useState } from 'react';
import { usePlayer } from '../hooks/usePlayer';
import { useEarth } from '../hooks/useEarth.js';

// const [earth, setEarth ] = useEarth(player, resetPlayer);



const GameBoard = () => {
  // const [dropTime, setDropTime] = useState(null);
  // const [gameOver, setGameOver] = useState(false);


  // const [player] = usePlayer()
  


  const movePlayer = dir => {
    updatePlayerPos({ x: dir, y: 0 });

  };  

  const move = ({ keyCode }) => {
    if (!gameOver) {
      //move to left OR event.code(ArrowLeft)
      if (keyCode === 37) {
        movePlayer(-1);
      //move to right OR event.code(ArrowRight)
      } else if (keyCode === 39) {
        movePlayer(1);
      }
    }
  };
// //const fire
// //space bar = keyCode === 32; OR event.code(Space)


  const startGame = () => {
    setEarth(createEarth());
  }

    return (
        <StyledGameBoardWrapper>
              <aside>
                <div>
                <Display text= 'High Score' />
                <Display text= 'Score' />
                <Display text= 'Level' />
                </div>
                <StartButton />
            </aside>  
          <StyledGameBoard>
            <Space space={createSpace()} />
            <Earth earth={createEarth()} />
           
          </StyledGameBoard> 
      
        </StyledGameBoardWrapper>
    )
}

//Gameboard will have: Earth, Space

// class GameBoard extends Component {

// }

export default GameBoard;