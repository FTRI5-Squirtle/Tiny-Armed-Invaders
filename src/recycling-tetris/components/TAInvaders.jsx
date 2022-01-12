import React, { useState } from 'react';
import { usePlayer } from '../hooks/usePlayer';

const [earth, setEarth, rowsCleared] = useEarth(player, resetPlayer);

const TAInvaders = () => {
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos] = usePlayer()
  


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
//const fire
//space bar = keyCode === 32; OR event.code(Space)


  const startGame = () => {
    setEarth(createEarth());
  }

  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text="High Score" />
              <Display text="Score" />
              <Display text="Level" />
            </div>
          )}
          <StartButton callback={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );

};

export default TAInvaders;

