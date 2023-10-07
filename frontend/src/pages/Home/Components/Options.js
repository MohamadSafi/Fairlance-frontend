import React from 'react';
import signup from '../../../assets/svg/signup.svg';
import analyzing from '../../../assets/svg/analyzing.svg';
import delivery from '../../../assets/svg/delivery.svg';
import paid from '../../../assets/svg/paid.svg';
import { StyledOptions } from '../style';
import { motion } from 'framer-motion';

const Options = () => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.7 }}>
      <StyledOptions id='options'>
        <div>
          <motion.p whileHover={{ scale: 1.5 }}>
            <img srcSet={signup} alt='' style={{ color: 'red' }} draggable='false' />
          </motion.p>
          Create account
          <p>You need to register to get your first job</p>
        </div>
        <div>
          <motion.p whileHover={{ scale: 1.5 }}>
            <img srcSet={analyzing} alt='' draggable='false' />
          </motion.p>
          Look for a job
          <p>Search for jobs that match your skills from all over the world</p>
        </div>
        <div>
          <motion.p whileHover={{ scale: 1.5 }}>
            <img srcSet={delivery} alt='' draggable='false' />
          </motion.p>
          Deliver the job
          <p>Make sure that you deliver the best quality projects</p>
        </div>
        <div>
          <motion.p whileHover={{ scale: 1.5 }}>
            <img src={paid} alt='' draggable='false' />
          </motion.p>
          Get paid
          <p>Get paid with your most convienent payment option</p>
        </div>
      </StyledOptions>
    </motion.div>
  );
};

export default Options;
