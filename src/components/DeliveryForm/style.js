import styled from 'styled-components';

export const StyledDeliveryForm = styled.div`
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

  .delivery-form {
    display: flex;
    flex-direction: column;
    padding: 0 1rem 1rem 1rem;
  }

 
  input,
  textarea {
    resize: none;
    min-width: 20%;
    width: fit-content;
    max-width: 80%;
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
