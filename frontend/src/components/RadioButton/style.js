import { styled } from 'styled-components';

export const StyledRadioButton = styled.div`
  color: #545454;
  margin-left: 0.5rem;
  display: block;
  position: relative;
  width: 100%;
  height: 30px;
  * {
    box-sizing: unset;
  }

  input[type='radio'] {
    position: absolute;
    visibility: hidden;
  }

  div {
    cursor: pointer;
  }

  label {
    display: block;
    position: relative;
    font-weight: 300;
    font-size: 0.9rem;
    padding: 15px 20px;
    margin: 5px auto;
    cursor: pointer;
  }

  &:hover label {
    color: #1e88e5;
  }

  .check {
    display: block;
    position: absolute;
    border: 2px solid #aaaaaa;
    border-radius: 100%;
    height: 10px;
    width: 10px;
    top: 20px;
    &::before {
      display: block;
      position: absolute;
      content: '';
      border-radius: 100%;
      height: 6px;
      width: 6px;
      top: 2px;
      left: 2px;
      margin: auto;
    }
  }

  &:hover .check {
    border: 2px solid #1e88e5;
  }

  input[type='radio']:checked ~ .check {
    border: 2px solid #1e88e5;
  }

  input[type='radio']:checked ~ .check::before {
    background: #1e88e5;
  }

  input[type='radio']:checked ~ label {
    color: #1e88e5;
  }
`;
