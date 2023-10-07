import styled from 'styled-components';

export const StyledMyApplications = styled.div`
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

export const StyledLoading = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    width: 85%;
    background-color: #fff;
    margin-bottom: 1rem;
  }
  .loading {
    display: block;
    background-color: #fff;
    height: 150px;
    padding: 1rem;
  }
`;
