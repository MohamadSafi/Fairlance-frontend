import styled from 'styled-components';

export const StyledPost = styled.div`
  border-bottom: solid 1px #d1d1d1;
  padding: 1rem 1.5rem;
  & > div:first-child {
    display: flex;
    div {
      margin-left: auto;
    }
    h4 {
      color: #000;
      &:hover {
        color: #1e88e5;
      }
    }
  }
  .price-range {
    display: flex;
    margin-right: auto;
    div {
      &:first-child {
        margin: 0 0 0 0.5rem;
      }
      display: flex;
      align-items: center;
    }
  }
  & > div:last-child {
    display: flex;
  }
`;
