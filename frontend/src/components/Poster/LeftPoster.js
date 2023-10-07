import React from 'react';
import { StyledPoster } from './style';
import { motion } from 'framer-motion';

const LeftPoster = ({ img, left, Content }) => {
  return (
    <StyledPoster className='main-view'>
      {left ? (
        <motion.div
          whileInView={{ x: 50, scale: 1, duration: 1 }}
          initial={{ x: -200, scale: 0.1 }}
          transition={{ type: 'spring', duration: 1, delay: 0.1 }}
        >
          {' '}
          <img src={img} alt='' draggable='false' style={{ marginRight: 'auto', marginLeft: 0 }} />
        </motion.div>
      ) : (
        ''
      )}
      <Content />
      {!left ? (
        <motion.div
          whileFocus={{ x: 500, scale: 3 }}
          initial={{ x: 400, scale: 0.1 }}
          transition={{ type: 'spring', duration: 1, delay: 0.1 }}
        >
          <img src={img} alt='' draggable='false' />{' '}
        </motion.div>
      ) : (
        ''
      )}
    </StyledPoster>
  );
};

export default LeftPoster;
