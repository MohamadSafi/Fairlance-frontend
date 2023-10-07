import React from 'react';
import { StyledFeedBack } from './style';

const index = () => {
  return (
    <a href='https://forms.gle/6G4ePxPdaw7dRnEeA' target='_blank' rel='noopener noreferrer'>
      <StyledFeedBack title='Bug report'>
        <i className='fa-solid fa-message'></i>
      </StyledFeedBack>
    </a>
  );
};

export default index;
