import styled from 'styled-components';

export const StyledApplicationForm = styled.div`
  width: 100%;
  margin-top: 1rem;
  background-color: #ffffff;
  border-bottom: solid 1px #d1d1d1;

  h1 {
    font-size: 1.1rem;
    font-weight: 600;
    padding: 1rem;
    border-bottom: 1px solid;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 1rem;
    font-weight: 1500;
    margin-bottom: 0.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
    padding: 0 1rem 1rem 1rem;
  }

  .price {
    /* margin-left: 1rem; */
    margin-top: 0.2rem;
    width: 80%;
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    input {
      padding: 0.3rem;
      margin: auto 0.5rem;
      width: fit-content;
    }
  }

  input,
  textarea {
    resize: none;
    width: 100%;
    padding: 1rem;
    border: 1px solid #d1d1d1;
    border-radius: 4px;
    margin-bottom: 1rem;
    font-size: 1rem;
    color: #444;
  }
  textarea {
    height: 200px;
  }
`;
