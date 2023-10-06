import React from 'react';
import whyus from '../../../assets/svg/why-us.svg';
import Poster from '../../../components/Poster/Poster';
import Button from '../../../components/Button/Button';
import { StyledWhyUs } from '../style';
import { Link } from 'react-router-dom';

const WhyUs = () => {
  const Content = () => {
    return (
      <StyledWhyUs>
        <h1>Why FairLance?</h1>
        <h4>
          <i className='fa-solid fa-business-time'></i> Post quickly and for free
        </h4>
        <p>We do not ask for any money to post your projects</p>
        <h4>
          <i className='fa-solid fa-globe'></i> Work with the best from all over the world
        </h4>
        <p>
          FairLance is created to break the borders. We do not ask users to display their
          nationalities on their profile.
        </p>
        <h4>
          <i className='fa-brands fa-bitcoin'></i> Small transaction fees
        </h4>
        <p>
          You can pay using crypto in our website. The most reliable, and the fastest payment method
          with almost no transaction fees
        </p>
        <Link to='/signup'>
          <Button>Sign up</Button>
        </Link>
      </StyledWhyUs>
    );
  };
  return <Poster img={whyus} left={true} Content={Content} />;
};

export default WhyUs;
