import { styled } from 'styled-components';

export const StyledPoster = styled.div`
  height: 100vh;
  width: 85%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  img {
    width: 80%;
    margin-left: auto;
  }

  div:first-child {
    h1 {
      margin-bottom: 1.5rem;
      user-select: none;
    }
    h3 {
      margin-top: 0.2rem;
      color: #7b7b7b;
      font-weight: 500;
      user-select: none;
    }
  }
`;
