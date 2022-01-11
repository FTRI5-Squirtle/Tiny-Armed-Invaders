import styled from 'styled-components';

export const StyledGameBoardWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  overflow: hidden;
  aside {
    float: right;
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`;

export const StyledGameBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;

`;