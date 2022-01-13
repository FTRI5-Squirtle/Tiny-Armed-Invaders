import React from 'react';
import styled from 'styled-components';

export default function Instructions() {
  const Container = styled.div`
  text-align: center;
`
  return (
    <div>
      <Container>
      <h1> Click Start Game to start the game. </h1>
      <h2>Use your arrow keys to move from right to left. </h2>
      <h2>Fight the tiny-armed hoardes with the Up Arrow.</h2>
      </Container>
    </div>
  )
}