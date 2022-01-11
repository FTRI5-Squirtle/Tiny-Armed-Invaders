import React from 'react';
// import Jetpack from '../characters/Jetpack.jsx';
// import Spaceship from '../characters/Spaceship.jsx';
import Cell from './Cell'
import { StyledSpace } from '../styles/StyledSpace'

// Space will have: Jetpack, Spaceship

const Space = ({ space }) => (
    <StyledSpace width={space[0].length} height={space.length}> 
        {space.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
    </StyledSpace>
)

export default Space;