import React from 'react';
import { StyledPoster } from './style';

const Poster = ({ img, left, Content }) => {
  return (
    <StyledPoster className='main-view'>
      {left ? (
        <img src={img} alt='' draggable='false' style={{ marginRight: 'auto', marginLeft: 0 }} />
      ) : (
        ''
      )}
      <Content />
      {!left ? <img src={img} alt='' draggable='false' /> : ''}
    </StyledPoster>
  );
};

export default Poster;
