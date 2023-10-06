import React, { useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import Select from 'react-select';
import Filters from './components/Filters';
import Posts from './components/Posts';
import { StyledFindContainer } from './styles';
import Footer from '../../components/Footer/Footer';

const FindJobPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const sortBy = [
    { value: 'newest', label: 'Newest first' },
    { value: 'popular', label: 'Most popular first' },
    { value: 'cheaper', label: 'Lowest budget first' },
    { value: 'expensive', label: 'Highest budget first' },
  ];
  return (
    <div>
      <NavBar />
      <StyledFindContainer>
        <h1>Browse jobs</h1>
        <div className='search'>
          <div className='search-options'>
            <SearchBar text='Search for a job' />
            <div className='sort-by'>
              <h4>Sort by :</h4>
              <Select options={sortBy} className='select-panel' defaultValue={sortBy[0]} />
            </div>
          </div>
        </div>
        <div className='posts-container'>
          <Filters />
          <Posts />
        </div>
      </StyledFindContainer>
      <Footer />
    </div>
  );
};

export default FindJobPage;
