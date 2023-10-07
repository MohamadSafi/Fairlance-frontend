import React from 'react';
import { StyledPoster } from './style';
import { motion } from 'framer-motion';

const Poster = ({ img, left, Content }) => {
  return (
    <StyledPoster className='main-view'>
      {left ? (
        <motion.div animate={{ x: 100 }} initial={{ x: 400 }} transition={{ delay: 0.1 }}>
          <img src={img} alt='' draggable='false' style={{ marginRight: 'auto', marginLeft: 0 }} />
        </motion.div>
      ) : (
        ''
      )}
      <Content />
      {!left ? (
        <motion.div
          animate={{ x: 100, scale: 1 }}
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

export default Poster;
