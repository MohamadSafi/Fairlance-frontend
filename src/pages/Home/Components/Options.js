import React from 'react';
import signup from '../../../assets/svg/signup.svg';
import analyzing from '../../../assets/svg/analyzing.svg';
import delivery from '../../../assets/svg/delivery.svg';
import paid from '../../../assets/svg/paid.svg';
import { StyledOptions } from '../style';

const Options = () => {
  return (
    <StyledOptions id='options'>
      <div>
        <img srcSet={signup} alt='' style={{ color: 'red' }} draggable='false' /> Create account
        <p>You need to register to get your first job</p>
      </div>
      <div>
        <img srcSet={analyzing} alt='' draggable='false' /> Look for a job
        <p>Search for jobs that match your skills from all over the world</p>
      </div>
      <div>
        <img srcSet={delivery} alt='' draggable='false' /> Deliver the job
        <p>Make sure that you deliver the best quality projects</p>
      </div>
      <div>
        <img src={paid} alt='' draggable='false' /> Get paid
        <p>Get paid with your most convienent payment option</p>
      </div>
    </StyledOptions>
  );
};

export default Options;
