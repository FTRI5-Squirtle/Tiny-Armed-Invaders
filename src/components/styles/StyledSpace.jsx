import styled from 'styled-components';

export const StyledSpace = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(35vw / ${props => props.width})
  );
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid #333;
  width: 100%;
  max-width: 45vw;
  background: #0000FF;
`;