import React from 'react';
import { StyledError } from './style';

const index = ({ errorMsg, errorState }) => {
  return errorState && <StyledError>{errorMsg}</StyledError>;
};

export default index;
