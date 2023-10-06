import { styled } from 'styled-components';

export const StyledError = styled.h4`
  color: red;
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
  &::before {
    display: inline;
    content: '⚠ ';
  }
`;
