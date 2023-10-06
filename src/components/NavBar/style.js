import { styled } from 'styled-components';

export const StyledNav = styled.ul`
  background-color: #fff;
  box-shadow: 1px 2px 8px 0px rgba(30, 136, 229, 0.1);
  position: ${(props) => (props.$notfixed ? 'static' : 'fixed')};
  width: 100%;
  z-index: 1;
  top: 0;
  #nav-container {
    display: flex;
    align-items: center;
    list-style: none;
    height: 2rem;
    padding: 2rem 0;
    width: 85%;
    margin: 0 auto;
    & > li {
      margin-left: 1rem;
      a,
      button {
        border: none;
        background-color: transparent;
        text-decoration: none;
        color: #000;
        font-size: 1.1rem;
        font-weight: 500;
        cursor: pointer;
        &:hover {
          color: #1e88e5;
          transition: all 0.3s;
        }
      }
      &:first-child {
        margin-left: 0;
        margin-right: auto;
        span {
          color: #1e88e5;
        }
        img {
          height: 2.7rem;
        }
      }
      &:nth-child(4) {
        margin-right: auto;
      }
      .active {
        color: #1e88e5;
      }
      #profile-fullname {
        font-size: 1.2rem;
        font-weight: 500;
      }
    }
  }
`;

export const Menu = styled.ul`
  /* main UL component called: "Menu" */
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;

  .name-head{
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 180px;
    margin-right: 3px;
  }

  /* dropdown LI */
  & > .dropdown {
    display: inline-block;

    & > .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;

      & > li {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;
        border-bottom: solid 1px #ccc;
        &:last-child {
          border-bottom: none;
        }
        &:first-child {
          margin-top: 1rem;
        }
        &:hover {
          background-color: #f1f1f1;
        }
      }
    }

    &:hover .dropdown-content {
      display: block;
    }
  }
`;
