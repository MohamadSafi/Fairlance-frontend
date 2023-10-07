import styled from 'styled-components';

export const StyledPostDetailsComponent = styled.div`
  width: 85%;
  margin: 5rem auto;
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
