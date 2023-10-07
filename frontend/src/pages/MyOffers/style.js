import { styled } from 'styled-components';

export const StyledOffers = styled.div`
  h1 {
    width: 85%;
    margin: auto;
    margin-bottom: 1rem;
    color: #1e88e5;
  }
  margin: 2rem;
  min-height: 60vh;
  h4 {
    margin-right: 1rem;
    display: inline-block;
    color: #777;
    &:hover {
      color: #1e88e5;
    }
  }
  h3 {
    margin-top: 0.5rem;
    overflow-wrap: break-word; /* Add this line to allow long words to wrap */
  }
  p {
    overflow-wrap: break-word; /* Add this line to allow long words to wrap */
    margin: 1rem 0.5rem;
  }
`;

export const StyledOffer = styled.div`
  width: 85%;
  background-color: #fff;
  margin: 0 auto;
  padding: 1rem;
  margin-top: 1rem;
  box-shadow: 0px 0px 12px -1px rgba(30, 136, 229, 0.1);
  a {
    text-decoration: none;
  }
  h2 {
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: solid 1px;
  }
  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
    font-weight: bold;
    text-decoration: none;
    color: #777;
    /* &:hover {
      color: #1e88e5;
    } */
  }
`;