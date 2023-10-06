import React from 'react';
import { StyledSearchBar } from './style';

const SearchBar = ({ text }) => {
  return (
    <>
      <StyledSearchBar type='text' placeholder={text}></StyledSearchBar>
      <i
        className='fa-sharp fa-solid fa-magnifying-glass search-bari'
        style={{ margin: 'auto 0 auto -2rem' }}
      ></i>
    </>
  );
};

export default SearchBar;
