import { styled } from 'styled-components';

export const StyledBlogs = styled.div`
  width: 85%;
  margin: 2rem auto 0 auto;
  .recents-panel {
    display: flex;
    height: 100%;
    & > button {
      background-color: transparent;
      height: fit-content;
      margin: auto;
      padding: 0.5rem;
      border-radius: 50%;
      cursor: pointer;
      background-color: #1e88e5;
      border: #1e88e5 solid 1px;
      color: #fff;
      height: 2.5rem;
      width: 2.5rem;
      font-size: 1rem;
      &:hover {
        background-color: #fff;
        color: #1e88e5;
        transition: all 0.2s;
      }
    }
    & > .disabled {
      background-color: #fff;
      color: #1e88e5;
      cursor: default;
    }
  }
  .recent-posts {
    display: grid;
    margin: 2rem auto;
    width: 90%;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.2rem;
    img {
      height: 100%;
      width: 100%;
    }
  }
`;
