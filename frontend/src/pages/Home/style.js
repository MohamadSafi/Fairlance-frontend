import { styled } from 'styled-components';

export const StyledOptions = styled.div`
  margin: 0 auto;
  width: 50%;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background-color: #fff;
  box-shadow: 5px 5px 26px 0px rgba(34, 60, 80, 0.2);
  padding: 1rem;
  border-radius: 1rem;
  margin-bottom: 3rem;
  user-select: none;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-weight: 600;
    border-right: solid 1px #1e88e5;
    padding: 0 0.5rem;
    &:last-child {
      border-right: none;
    }
    p {
      margin-top: 3px;
      font-size: 0.7rem;
      color: #9a9a9a;
    }
    img {
      margin-bottom: 0.6rem;
      display: block;
      width: 40px;
      height: 40px;
    }
  }
`;

export const StyledPost = styled.div`
  height: 100%;
  border-radius: 0.3rem;
  padding: 1rem 1rem 1rem 1rem;
  width: 100%;
  background-color: #fff;
  box-shadow: 4px 4px 25px -8px rgba(30, 136, 229, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  h4 {
    margin: 0.3rem 0;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  & > div:first-child {
    height: 100%;
  }
  .post-image {
    margin-top: 0.5rem;
    width: 100%;
    height: 180px;
  }
  .post-paragraph {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: #7b7b7b;
    width: 100%;
    overflow: hidden;
    p {
      display: -webkit-box;
      max-width: 100%;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
  .apply-info {
    p {
      margin-right: auto;
    }
    bottom: 0;
    display: flex;
    padding: 0.5rem 0;
    justify-content: center;
    align-items: center;
    button {
      margin-right: auto;
    }
  }
`;

export const StyledWhyUs = styled.div`
  h4 {
    margin-top: 1.2rem;
  }
  p {
    color: #7b7b7b;
    margin-left: 3rem;
  }
  i {
    color: #1e88e5;
    margin-right: 1rem;
    font-size: 1.2rem;
  }
  button {
    margin-top: 2rem;
  }
`;

export const StyledHire = styled.div`
  width: 100%;
  margin-top: 3rem;
`;
