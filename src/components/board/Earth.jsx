import React from 'react';
import Cell from './Cell'
import EARTH_HEIGHT from '../gameHelpers.jsx';
import { StyledEarth } from '../styles/StyledEarth';
// import Hero from '../characters/Hero.jsx';

const Earth = ({ earth }) => (
    <StyledEarth width={earth[0].length} height={earth.length}> 
        {earth.map(row => row.map((cell, x) =>  <Cell key={x} type={cell[0]} />))}
    </StyledEarth>
)

export default Earth;