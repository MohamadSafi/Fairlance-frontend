import React from 'react';
import searching from '../../../assets/svg/searching.svg';
import Poster from '../../../components/Poster/Poster';
import SearchBar from '../../../components/SearchBar/SearchBar';
import Button from '../../../components/Button/Button';
import { StyledHire } from '../style';
import { Link } from 'react-router-dom';

const MainView = () => {
  const Content = () => {
    return (
      <div>
        <h1>Are you looking for freelancers?</h1>
        <h3>Hire freelancers quickly, for free and without limits with FairLance.</h3>
        <h3>We have experienced freelancers from all around the world</h3>
        <StyledHire className='hire-search'>
          <Link to='/create-post'>
            <Button extrapadding={true} primary={true}>
              Hire freelancer
            </Button>
          </Link>
          <SearchBar text='Search for a job' />
        </StyledHire>
      </div>
    );
  };
  return <Poster img={searching} Content={Content} />;
};

export default MainView;
