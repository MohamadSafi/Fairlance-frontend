import styled from 'styled-components';

export const StyledFilters = styled.div`
  width: 20%;
  background-color: #fff;
  margin-top: 1.5rem;
  box-shadow: 0px 0px 12px -1px rgba(30, 136, 229, 0.2);
  padding: 1rem;
  height: fit-content;
  & > div {
    margin-top: 1rem;
    border-bottom: 1px solid #7b7b7b;
    padding-bottom: 1.5rem;
    &:last-child {
      border: none;
    }
    h4 {
      display: block;
      font-weight: 600;
      user-select: none;
      margin-bottom: 0.3rem;
    }
  }
  .range-values {
    margin-top: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    input:first-child {
      margin-right: 1rem;
    }
  }
  .rating-filter {
    display: flex;
    input {
      margin: 0 auto;
    }
  }
  input[type='number'] {
    appearance: textfield;
    width: 40%;
    padding: 0.5rem;
  }
`;

export const StyledFindContainer = styled.div`
  width: 85%;
  margin: 5rem auto;
  h4 {
    font-weight: 300;
    margin-right: 1rem;
    display: inline-block;
  }
  .search {
    margin-top: 1rem;
    width: 100%;
    padding: 1rem 1rem 1.5rem 1rem;
    background-color: #fff;
    box-shadow: 0px 0px 12px -1px rgba(30, 136, 229, 0.2);
    input {
      border: none;
      border-bottom: solid 1px #7b7b7b;
      border-radius: 0;
      &:focus {
        box-shadow: none;
      }
    }
  }
  .search-options {
    display: flex;
    .sort-by {
      width: fit-content;
      margin-left: auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .posts-container {
    display: flex;
  }
`;

export const StyledPosts = styled.div`
  margin-left: auto;
  height: 100%;
  width: calc(80% - 1.5rem);
  background-color: #fff;
  margin-top: 1.5rem;
  box-shadow: 0px 0px 12px -1px rgba(30, 136, 229, 0.2);
  white-space: pre-line;
  padding: 1rem 0;
  h3 {
    margin-top: 0.5rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  h4 {
    font-weight: 500;
  }
  p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    line-clamp: 4;
    -webkit-box-orient: vertical;
    margin: 1rem 0.5rem;
  }
  .loading-container {
    padding-top: 2rem;
    .loading {
      padding-left: 2rem;
      height: 180px;
    }
  }
`;
