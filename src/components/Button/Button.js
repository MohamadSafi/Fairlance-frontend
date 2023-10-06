import React from 'react';
import { StyledButton } from './style';

const Button = ({ type, children, primary, extrapadding, onClick }) => {
  return (
    <StyledButton $type={type} $primary={primary} $extrapadding={extrapadding} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
