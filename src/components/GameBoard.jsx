import React, { Component } from 'react';
// import Earth from './board/Earth.jsx';
import Display from './Display.jsx'
import Space from './board/Space.jsx';
import Earth from './board/Earth.jsx'
import StartButton from './StartButton.jsx';
import { createSpace, createEarth } from './gameHelpers.jsx';
import { StyledGameBoardWrapper, StyledGameBoard } from './styles/StyledGameBoard.jsx';


const GameBoard = () => {

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