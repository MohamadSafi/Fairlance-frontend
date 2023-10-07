import { styled } from 'styled-components';

export const StyledFAQ = styled.div`
  .container {
    width: 85%;
    margin: 1.5rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    header {
      width: 40%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    img {
      width: 100%;
      margin: 0 auto;
    }
    h3 {
      margin: 2.5rem 0 0 0;
      width: 60%;
    }
  }
`;

export const StyledQuestionsBlock = styled.div`
  margin-top: 0.5rem;
  background-color: #fff;
  width: 60%;
  padding: 0;
  border-radius: 0.5rem;
  box-shadow: 2px 2px 8px 0px rgba(30, 136, 229, 0.2);
`;

export const StyledCollapsible = styled.div`
  cursor: pointer;
  border-bottom: 1px solid;
  padding: 1rem;
  &:hover {
    background-color: #f2f2f2;
  }
  .shown {
    display: flex;
    align-items: center;
    div {
      margin-left: auto;
      padding: 0.5rem;
      border: none;
      background-color: transparent;
      color: #1e88e5;
      transition: all 0.3s;
    }
  }
  .hidden {
    padding: 1rem;
    padding-top: 0.5rem;
    color: #4b4b4b;
  }
`;
