import React, { Component } from 'react';
// import Earth from './board/Earth.jsx';
import Display from './Display.jsx'
import Space from './board/Space.jsx';
import StartButton from './StartButton.jsx';
import { createSpace } from './gameHelpers.jsx';
import { StyledGameBoardWrapper, StyledGameBoard } from './styles/StyledGameBoard.jsx';


const GameBoard = () => {

    return (
        <StyledGameBoardWrapper>
          <StyledGameBoard>
            <Space space={createSpace()} />
            <aside>
                <div>
                <Display text= 'Score' />
                <Display text= 'Level' />
                </div>
                <StartButton />
            </aside>
          </StyledGameBoard>   
        </StyledGameBoardWrapper>
    )
}

//Gameboard will have: Earth, Space

// class GameBoard extends Component {

// }

export default GameBoard;