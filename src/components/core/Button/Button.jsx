import MuiButton from '@mui/material/Button';
import React from 'react';

const Button = ({ children, onClick, sx, variant, component, to, type, fullWidth}) => {
  return <MuiButton sx={sx} onClick={onClick} variant={variant} component={component} to={to} type={type} fullWidth={fullWidth}>{children} </MuiButton>;
};

export default Button;
