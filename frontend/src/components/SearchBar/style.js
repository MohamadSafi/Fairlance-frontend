import { styled } from 'styled-components';

export const StyledSearchBar = styled.input`
  padding: 1rem;
  width: 50%;
  font-size: 1rem;
  border: solid 1px #7b7b7b;
  font-weight: 500;
  border-radius: 0.4rem;
  &::placeholder {
    color: #9a9a9a;
  }

  &:focus {
    outline: none;
    border: 1px #1e88e5 solid;
    box-shadow: 2px 2px 8px 0px rgba(30, 136, 229, 0.2);
    transition: all 0.3s;
  }
`;
