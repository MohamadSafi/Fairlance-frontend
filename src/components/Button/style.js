import { styled } from 'styled-components';

export const StyledButton = styled.button`
  font-weight: ${(props) => (props.$extrapadding ? 600 : 400)};
  padding: ${(props) => (props.$extrapadding ? '1rem' : '0.6rem 1rem')};
  font-size: 1rem;
  background-color: ${(props) => (props.$primary ? '#1E88E5' : '#fff')};
  border: solid #1e88e5 1px;
  border-radius: 0.2rem;
  color: ${(props) => (props.$primary ? '#fff' : '#1E88E5')};
  cursor: pointer;
  margin-right: 0.5rem;
  box-shadow: 2px 2px 8px 0px rgba(30, 136, 229, 0.2);
  &:hover {
    background-color: ${(props) => (props.$primary ? '#fff' : '#1E88E5')};
    color: ${(props) => (props.$primary ? '#1E88E5' : '#fff')};
    transition: all 0.4s;
  }
`;
