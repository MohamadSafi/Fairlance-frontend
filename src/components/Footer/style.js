import { styled } from 'styled-components';

export const StyledFooter = styled.div`
  margin-top: 2rem;
  background-color: #001040;
  align-items: center;
  color: #fff;

  .lists-container {
    width: 85%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  ul {
    list-style: none;
    padding: 2rem 0;
    li {
      padding: 0.05rem 0;
      img {
        width: 35%;
      }
      &:first-child {
        margin-bottom: 0.6rem;
        font-size: 1.1rem;
        font-weight: 700;
        user-select: none;
      }
    }
  }

  a {
    color: #fff;
    text-decoration: none;
    font-size: 0.9rem;
    &:hover {
      text-decoration: underline;
    }
  }
`;
