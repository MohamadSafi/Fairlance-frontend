import { styled } from 'styled-components';

export const CreatePostStyled = styled.div`
  display: flex;
  width: 85%;
  margin: 1rem auto;
  height: 85vh;
  & > div {
    position: relative;
    width: 75%;
    height: 100%;
    background-color: #fff;
    &:first-child {
      width: 25%;
      border-right: solid #d1d1d1 1px;
    }
  }
  form {
    background-color: #fff;
    margin: 1rem auto;
    margin-left: 1.5rem;
    padding: 1rem;
    height: 85%;
    input,
    textarea {
      border: 1px solid #ddd;
      &:focus {
        outline: 1px solid #aaa;
      }
    }
    & > input {
      display: block;
      margin-left: 0.7rem;
      padding: 0.7rem;
      width: 60%;
      margin-bottom: 1rem;
      color: #616161;
      font-size: 1rem;
    }
    label {
      display: block;
      font-weight: 500;
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }
    .file-upload {
      label {
        display: flex;
      }
    }
    textarea {
      margin-left: 0.7rem;
      margin-top: 0.5rem;
      width: 95%;
      height: 65%;
      resize: none;
      color: #616161;
      font-size: 1rem;
      padding: 0.6rem;
    }
    h2 {
      margin-bottom: 1.5rem;
    }
    p {
      color: #616161;
      margin-bottom: 0.6rem;
      font-size: 0.9rem;
    }
  }
  .job-category {
    margin-left: 0.7rem;
    label {
      font-size: 0.9rem;
    }
    .check {
      height: 7px;
      width: 7px;
      &::before {
        height: 5px;
        width: 5px;
        top: 1px;
        left: 1px;
      }
    }
  }
  .next-page {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
  }
  div.ReactTags__tags {
    margin-bottom: 1rem;
    position: relative;
    margin-left: 0.5rem;
    button {
      background-color: transparent;
      border: none;
      padding: 0.2rem 0.5rem;
      cursor: pointer;
    }
    input {
      height: 31px;
      font-size: 12px;
      width: 100%;
      padding: 4px;
    }
    span {
      border: 1px solid #ddd;
      background: #eee;
      font-size: 12px;
      display: inline-block;
      padding: 5px;
      margin: 0 5px;
      cursor: move;
      border-radius: 2px;
      margin-bottom: 0.3rem;
    }
  }
  div.ReactTags__tagInput {
    width: 50%;
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  div.ReactTags__suggestions {
    position: absolute;
  }
  div.ReactTags__suggestions ul {
    list-style-type: none;
    box-shadow: 0.05em 0.01em 0.5em rgba(0, 0, 0, 0.2);
    background: white;
    width: 200px;
  }
  div.ReactTags__suggestions li {
    border-bottom: 1px solid #ddd;
    padding: 5px 10px;
    margin: 0;
  }
  div.ReactTags__suggestions li mark {
    text-decoration: underline;
    background: none;
    font-weight: 600;
  }
  div.ReactTags__suggestions ul li.ReactTags__activeSuggestion {
    background: #b7cfe0;
    cursor: pointer;
  }
  .range-values {
    margin-left: 1rem;
    margin-top: 0.5rem;
    width: 80%;
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    input {
      padding: 0.3rem;
      margin: auto 0.5rem;
      width: 10%;
    }
  }
  .date-picker {
    margin-left: 1rem;
    padding: 0.5rem;
    width: 100%;
  }
  .no-edit {
    input {
      display: none;
    }
    button {
      display: none;
    }
  }
  .final-preview {
    p {
      white-space: pre-wrap;
      margin: 0.5rem 1rem 1rem 1rem;
      height: 60%;
      overflow: scroll;
    }
  }
  .price-range {
    margin-bottom: 0.4rem;
  }
  #tags-list {
    display: none;
  }
`;

export const StyledProgress = styled.div`
  padding-top: 2rem;
  #elements {
    z-index: 100;
    position: relative;
    .active-border {
      border-right: solid 4px #1e88e5;
      color: #1e88e5;
      &::after {
        background-color: #1e88e5;
      }
    }
  }
  #elements div {
    font-weight: 700;
    font-size: 1rem;
    border-right: solid 4px #ccc;
    width: fit-content;
    padding: 20% 1rem 0 0;
    margin: 0 1rem 0 auto;
    position: relative;
    &::after {
      content: '';
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background-color: #ccc;
      display: block;
      position: absolute;
      right: -6px;
      z-index: 1;
    }
  }
  .arrow {
    height: 100%;
    width: 2px;
    background-color: red;
  }
`;
